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
body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  color: #2c3e50;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
}
</style>