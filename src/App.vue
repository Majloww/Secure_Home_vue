<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {Footer, Header},
};
</script>

<style scoped>
/* Ensure the body has no horizontal overflow */
body {
  overflow-x: hidden; /* Prevent horizontal scrolling */
  margin: 0;
  padding: 0;
}

#app {
  width: 100%; /* Full width of its container */
  max-width: 100%; /* Prevents any overflow */
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
</style>