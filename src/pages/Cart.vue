<template>
  <div class="container" id="main-cont">
    <div v-if="cartProducts.length > 0" class="container">
      <h1 class="text-center">Your Cart</h1>
      <div class="row cart-item" v-for="product in cartProducts" :key="product.product_id">
        <div class="col-md-3">
          <img
              :src="`src/images/${product.product_id}.jpg`"
              :alt="product.title"
              class="cart-img"
          />
        </div>
        <div class="col-md-6">
          <h5>{{ product.title }}</h5>
          <p>{{ product.description }}</p>
        </div>
        <div class="col-md-3 text-end">
          <p>Price: ${{ product.price }}</p>
          <button class="btn btn-danger" @click="removeFromCart(product.product_id)">Remove</button>
        </div>
      </div>
    </div>
    <div v-else>
      <h2 class="text-center">Your cart is empty.</h2>
    </div>
  </div>
</template>

<script>
import {useCartStore} from "@/stores/cart";

export default {
  name: "Cart",
  computed: {
    // Get products from the Pinia store
    cartProducts() {
      const cartStore = useCartStore();
      return cartStore.cart;
    },
  },
  methods: {
    removeFromCart(productId) {
      const cartStore = useCartStore();
      cartStore.removeProduct(productId); // Remove product using Pinia store
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
</style>
