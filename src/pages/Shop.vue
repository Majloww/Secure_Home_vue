<template>
  <div v-if="products.length > 0" class="container" id="main-cont">
    <!-- Popup for item added to cart -->
    <div v-if="showPopup" class="popup" :style="popupStyle">
      <p>Item added to cart!</p>
    </div>

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
            <button class="btn btn-primary" @click="addToCart(product, $event)">Add to Cart</button>
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
import { useCartStore } from '@/stores/cart';

export default {
  name: "Shop",
  data() {
    return {
      products: [],
      showPopup: false,  // State to track if the popup should be shown
      popupStyle: {}     // Style for the popup (dynamic position)
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
    addToCart(product, event) {
      const cartStore = useCartStore();
      cartStore.addProduct(product); // Pinia store function to add the product to the cart

      // Get the position of the button relative to the viewport
      const buttonRect = event.target.getBoundingClientRect();

      // Show the popup near the button (5px to the right of the button)
      this.showPopup = true;
      this.popupStyle = {
        top: `${buttonRect.top + window.scrollY - 100}px`,  // Position above the button
        left: `${buttonRect.left + window.scrollX + buttonRect.width + 45}px`, // 5px to the right of the button
        position: 'absolute',
      };

      // Hide the popup after 2 seconds
      setTimeout(() => {
        this.showPopup = false;
      }, 2000);
    },
  },
  created() {
    this.fetchProducts(); // Fetch products on component creation
  },
};
</script>

<style scoped>
#main-cont {
  margin-top: 20px;
}

p {
  font-weight: unset !important;
}

h5 {
  font-weight: bold;
}

.card {
  margin-bottom: 20px;
}

.card img {
  max-height: 200px;
  object-fit: cover;
}

/* Styling for the popup */
.popup {
  position: absolute; /* Absolute position relative to the document */
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transform: translateX(-50%); /* Center the popup horizontally */
}
</style>
