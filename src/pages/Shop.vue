<template>
  <div v-if="products.length > 0" class="container" id="main-cont">
    <div v-if="showPopup" class="popup" :style="popupStyle">
      <p>Item added to cart!</p>
    </div>

    <br><br>
    <div class="row">
      <!--item cards loop-->
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

export default {
  name: "Shop",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
      showPopup: false,
      popupStyle: {}
    };
  },
  methods: {
    fetchProducts() {
      axios
          .get("http://localhost/eshop/fetch-products.php")
          .then((response) => {
            console.log(response.data);
            this.products = response.data;
          })
          .catch((error) => {
            console.error("Error fetching products:", error);
          });
    },

    showPopupMessage(position) {
      this.showPopup = true;
      this.popupStyle = {
        top: `${position.top}px`,
        left: `${position.left}px`,
        position: 'absolute',
      };

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

.popup {
  position: absolute;
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transform: translateX(-50%);
}
</style>