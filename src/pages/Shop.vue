<template>
  <div v-if="products.length > 0" class="container" id="main-cont">
    <Popup :visible="showPopup" @update:visible="showPopup = $event" message="Item added to cart!" />

    <br><br>
    <div class="row">
      <!-- Item cards loop -->
      <div class="col-md-4 col-sm-6 col-12 mb-4" v-for="product in products" :key="product.product_id">
        <ProductCard
            :product="product"
            @show-popup="showPopupMessage"
        />
      </div>
    </div>
  </div>
  <div v-else>
    <p>No products found.</p>
  </div>
</template>

<script>
import axios from 'axios';
import ProductCard from '@/components/ProductCard.vue';
import Popup from '@/components/Popup.vue';

export default {
  name: "Shop",
  components: {
    ProductCard,
    Popup, // Import Popup component
  },
  data() {
    return {
      products: [],
      showPopup: false,
    };
  },
  methods: {
    fetchProducts() {
      axios
          .get("http://localhost/eshop/fetch-products.php")
          .then((response) => {
            this.products = response.data;
          })
          .catch((error) => {
            console.error("Error fetching products:", error);
          });
    },

    showPopupMessage() {
      this.showPopup = true;
      setTimeout(() => {
        this.showPopup = false;
      }, 2000);
    },
  },
  created() {
    this.fetchProducts();
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
</style>