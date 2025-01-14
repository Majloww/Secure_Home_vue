<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
    <div class="container">
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
            <router-link class="nav-link" to="/" exact-active-class="active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/shop" exact-active-class="active">Shop</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart" exact-active-class="active">Cart</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/review" exact-active-class="active">Review</router-link>
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
              <router-link class="dropdown-item" to="/qaa">Q&A</router-link>
              <router-link class="dropdown-item" to="/review">Review</router-link>
              <router-link class="dropdown-item">Log out</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isAdmin: true,
      username: "Admin"
    };
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
}

.navbar.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1050;
}

.dropdown-menu {
  background-color: #343a40;
}

.dropdown-item {
  color: white;
}

.dropdown-item-text {
  color: limegreen;
}

:deep(.router-link-active) {
  font-weight: bold !important;
  color: limegreen !important;
}
</style>
