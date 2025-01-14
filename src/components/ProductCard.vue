<template>
  <div class="card shadow-sm h-100">
    <img
        class="card-img-top"
        :src="`src/images/${product.product_id}.jpg`"
        :alt="product.title"
        style="object-fit: cover; height: 200px;"
    />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">{{ product.description }}</p>
      <p class="card-text">Price: ${{ product.price }}</p>
      <p class="card-text">Available: {{ product.quantity }}</p>
      <button ref="addToCartBtn" class="btn btn-success mt-auto" @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/cart";

export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
  methods: {
    addToCart() {
      const cartStore = useCartStore();
      cartStore.addProduct(this.product); //add to cart through pinia store

      const buttonRect = this.$refs.addToCartBtn.getBoundingClientRect(); //pos of button

      this.$emit("show-popup", {
        top: buttonRect.top + window.scrollY - 100,
        left: buttonRect.left + window.scrollX + buttonRect.width / 2,
      });
    },
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}

.card img {
  max-height: 200px;
  object-fit: cover;
}
</style>
