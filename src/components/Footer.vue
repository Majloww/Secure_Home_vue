<template>
  <footer class="bg-dark text-white w-100">
    <div class="container">
      <div class="row">
        <p>Leave us a review! You can write it in <router-link to="/review">reviews</router-link></p>
      </div>
      <div class="row align-items-center">
        <div class="col-md-6">
          Explore our high quality products <router-link to="/shop">here</router-link><br>
          Contact our <span style="color: red; font-weight: bold;">24/7</span> customer support: <a href="https://www.fbi.gov/contact-us">1-800-225-5324</a>
        </div>
          <div class="col-md-6">
            Follow us on our social medias: <br>
            <a href="https://facebook.com">Facebook</a><br>
            <a href="https://instagram.com">Instagram</a><br>
            <a href="https://twitter.com">Twitter</a>
          </div>
        </div>
        <div class="row">
          <p>© 2023 Copyright by: Miloš Chmelko</p>
        </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
footer {
  background-color: #343a40;
  margin-top: 50px;
  padding-top: 20px;
  color: white;
}</style>
