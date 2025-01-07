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

          <!-- Quantity control -->
          <div class="quantity-controls">
            <button class="btn btn-secondary" @click="decreaseQuantity(item)">-</button>
            <span class="quantity">{{ item.quantity }}</span>
            <button class="btn btn-secondary" @click="increaseQuantity(item)">+</button>
          </div>

          <!-- Remove all button -->
          <button class="btn btn-danger mt-2" @click="removeAllOfItem(item.product_id)">Remove All</button>
        </div>
      </div>

      <!-- Total price section -->
      <div class="total-price text-end">
        <h3>Total: ${{ totalPrice.toFixed(2) }}</h3>
      </div>
    </div>

    <div v-else>
      <h2 class="text-center">Your cart is empty.</h2>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/cart";

export default {
  name: "Cart",
  computed: {
    cartProducts() {
      const cartStore = useCartStore();
      return cartStore.cart;
    },

    // Group items by product_id and count their quantity
    groupedCartProducts() {
      const grouped = [];
      this.cartProducts.forEach(product => {
        const existingProduct = grouped.find(item => item.product_id === product.product_id);
        if (existingProduct) {
          existingProduct.quantity += 1;  // Increase quantity if the product is already in the list
        } else {
          grouped.push({ ...product, quantity: 1 });  // Add new product with quantity 1
        }
      });
      return grouped;
    },

    // Calculate total price based on quantity and price per item
    totalPrice() {
      return this.groupedCartProducts.reduce((total, item) => {
        return total + item.price * item.quantity; // Multiply price by quantity and add to total
      }, 0);
    },
  },
  methods: {
    increaseQuantity(item) {
      const cartStore = useCartStore();
      cartStore.addProduct(item); // Add one more instance of the item
    },

    decreaseQuantity(item) {
      const cartStore = useCartStore();
      cartStore.removeProduct(item.product_id); // Decrease quantity by removing one instance
    },

    removeAllOfItem(productId) {
      const cartStore = useCartStore();
      cartStore.removeProduct(productId, true); // Remove all instances of the item
    },
  },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
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
</style>
