<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">
      <img
          :src="isAdmin ? 'src/images/shield-halved-solid-green.png' : 'images/shield-halved-solid.ico'"
          alt="Home"
      />
    </router-link>
    <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/" active-class="active">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/shop" active-class="active">Shop</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/review" active-class="active">Review</router-link>
        </li>
        <li class="nav-item dropdown">
          <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
          >
            Menu
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <span class="dropdown-item-text">{{ username }}</span>
            <hr/>
            <router-link class="dropdown-item" to="/profile">Profile</router-link>
            <router-link class="dropdown-item" to="/cart">Cart</router-link>
            <router-link class="dropdown-item" to="/qaa">Q&A</router-link>
            <router-link class="dropdown-item" to="/review">Review</router-link>
            <router-link v-if="isAdmin" class="dropdown-item" to="/users">Users</router-link>
            <router-link v-if="isAdmin" class="dropdown-item" to="/create-user">Create User</router-link>
            <router-link class="dropdown-item" to="/logout">Log out</router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isAdmin: true, // Replace with dynamic logic if needed
      username: "JohnDoe", // Replace with dynamic logic if needed
    };
  },
};
</script>

<style scoped>
.navbar .nav-link {
  color: white;
}

.navbar .nav-link.active {
  font-weight: bold;
  color: #ffc107; /* Highlight color for active links */
}
</style>
