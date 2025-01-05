<template>
  <div v-if="products.length > 0" class="container">
    <br><br>
    <div class="row">
      <div class="col-md-4" v-for="product in products" :key="product.product_id">
        <div class="card">
          <img
              class="card-img-top"
              :src="`src/images/${product.product_id}.jpg`"
              :alt="product.title"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">Price: ${{ product.price }}</p>
            <p class="card-text">Available: {{ product.quantity }}</p>
            <button class="btn btn-primary" @click="addToCart(product)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>No products found.</p>
  </div>
</template>

<script>
import axios from 'axios';
import {useCartStore} from '@/stores/cart';

export default {
  name: "Shop",
  data() {
    return {
      products: [],
    };
  },
  methods: {
    // Fetch products from PHP backend
    fetchProducts() {
      axios
          .get("http://localhost/eshop/fetch-products.php") // Adjust to your PHP file's URL
          .then((response) => {
            console.log(response.data);
            this.products = response.data;
          })
          .catch((error) => {
            console.error("Error fetching products:", error);
          });
    },

    // Add product to cart
    addToCart(product) {
      const cartStore = useCartStore();
      cartStore.addProduct(product); // Pinia store function to add the product to the cart
    },
  },
  created() {
    this.fetchProducts(); // Fetch products on component creation
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
