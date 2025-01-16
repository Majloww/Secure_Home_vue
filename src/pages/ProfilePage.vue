<template>
  <div class="container profile-container">
    <h1>Profile Name: Admin</h1>
  </div>
</template>

<script>
export default {
  name: "ProfilePage"
}
</script>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  text-align: center;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}
</style>