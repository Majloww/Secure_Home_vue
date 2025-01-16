<template>
  <div class="container" id="main-cont">
    <div id="main-page">

      <!--Carousel-->
      <Carousel/>

      <!--Description Section-->
      <div class="container" id="desc-cont">
        <h1>Secure home</h1>
        <h2>Your go-to destination for global home security solutions.</h2>
      </div>

      <!--Text and Image Section-->
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-flex" id="text-col">
            <p>
              Explore our range of cutting-edge devices, from smart cameras to advanced doorbell systems,
              providing unmatched protection worldwide. With a commitment to quality assurance, our products
              are designed for easy installation and user-friendly operation.
              <span style="font-weight: bolder; color: rgb(95, 95, 95);">Shielded™</span> can be seamlessly
              integrated into your home, ensuring peace of mind no matter where you are.
            </p>
          </div>
          <div class="col-md-6">
            <img src="@/images/5.jpg" alt="banner" class="img-fluid">
          </div>
        </div>
        <div class="row">
          <div class="col text-center my-5">
            <h4 class="blink">Join us in creating a safer world, one home at a time.</h4>
          </div>
        </div>
      </div>

      <!--List Section-->
      <div class="container">
        <List :items="textItems"/>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import List from "@/components/List.vue";

export default {
  name: "MainPage",
  components: {
    Carousel,
    List,
  },
  data() {
    return {
      textItems: [
        "We make the best security devices in central Europe and proudly stand by them!",
        "We ship to almost every country in the world!",
        "We have a wide variety of security devices in stock!",
        "Our customer support is available 24/7.",
        "When ordering in Slovakia, you can opt for free installation by our expert team! Offer is available until 31.12.2023.",
      ],
    };
  },
};
</script>

<style scoped>
h1{
  font-size: 70px;
}

h2 {
  font-size: 25px;
}

#desc-cont {
  margin-top: 100px;
  margin-bottom: 200px;
  text-align: center;
}

.blink {
  animation: blink-animation 1.5s infinite;
}

@keyframes blink-animation {
  50% {
    opacity: 0;
  }
}
</style>
