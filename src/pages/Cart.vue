<template>
  <div class="container" id="main-cont">
    <div v-if="cartProducts.length > 0" class="container">
      <h1 class="text-center">Your Cart</h1>

      <div class="row cart-item" v-for="(item, index) in groupedCartProducts" :key="item.product_id">
        <div class="col-md-3">
          <img
              :src="`src/images/${item.product_id}.jpg`"
              :alt="item.title"
              class="cart-img"
          />
        </div>
        <div class="col-md-6">
          <h5>{{ item.title }}</h5>
          <p>{{ item.description }}</p>
        </div>
        <div class="col-md-3 text-end">
          <p>Price: ${{ item.price }}</p>

          <!-- Quantity -->
          <div class="quantity-controls">
            <button class="btn btn-secondary" @click="decreaseQuantity(item)">-</button>
            <span class="quantity">{{ item.quantity }}</span>
            <button class="btn btn-secondary" @click="increaseQuantity(item)">+</button>
          </div>

          <!-- Remove all button -->
          <button class="btn btn-danger mt-2" @click="removeAllOfItem(item.product_id)">Remove All</button>
        </div>
      </div>

      <!-- Total price -->
      <div class="total-price text-end">
        <h3>Total: ${{ totalPrice.toFixed(2) }}</h3>
      </div>

      <!-- Order button -->
      <div class="text-end">
        <button @click="placeOrder" class="btn btn-success mt-3">Place Order</button>
      </div>

      <!-- Popup order confirmation -->
      <div v-if="showPopup" class="popup">
        <p>Order has been sent successfully!</p>
        <button @click="closePopup" class="btn btn-primary mt-2">Close</button>
      </div>
    </div>

    <div v-else>
      <h2 class="text-center">Your cart is empty.</h2>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/cart";
import { useRouter } from "vue-router";

export default {
  name: "Cart",
  data() {
    return {
      showPopup: false,
    };
  },
  computed: {
    cartProducts() {
      const cartStore = useCartStore();
      return cartStore.cart;
    },

    groupedCartProducts() {
      const grouped = [];
      this.cartProducts.forEach(product => {
        const existingProduct = grouped.find(item => item.product_id === product.product_id);
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          grouped.push({ ...product, quantity: 1 });
        }
      });
      return grouped;
    },

    totalPrice() {
      return this.groupedCartProducts.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    increaseQuantity(item) {
      const cartStore = useCartStore();
      cartStore.addProduct(item);
    },

    decreaseQuantity(item) {
      const cartStore = useCartStore();
      cartStore.removeProduct(item.product_id);
    },

    removeAllOfItem(productId) {
      const cartStore = useCartStore();
      cartStore.removeProduct(productId, true);
    },

    placeOrder() {
      const cartStore = useCartStore();
      const router = useRouter();

      cartStore.clearCart();
      this.showPopup = true;

      /*
      this.$nextTick(() => { //redirect after next DOM update
        setTimeout(() => {
          this.showPopup = false;
          router.push("/shop");
        }, 3000);
      });
      */
    },

    closePopup() {
      this.showPopup = false;
    },
  },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 15px;
}

.cart-img {
  width: 100%;
  height: auto;
  max-height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.text-end {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.quantity-controls {
  display: flex;
  align-items: center;
}

.quantity {
  margin: 0 10px;
  font-size: 1.2rem;
}

.total-price {
  margin-top: 20px;
  font-weight: bold;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
}

.popup button {
  margin-top: 10px;
  padding: 10px 20px;
}
</style>
