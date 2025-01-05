<template>
  <div class="container" id="main-cont">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="username">Username:</label>
            <input class="form-control" type="text" v-model="username" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label><br />
            <input class="form-control" type="password" v-model="password" required /><br />
          </div>
          <button type="submit" class="btn btn-secondary btn-block">Submit</button>
          <router-link to="/register">Don't have an account yet? Create one!</router-link>
          <div v-if="errorMessage" class="alert alert-danger mt-3">
            {{ errorMessage }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    handleLogin() {
      // Mock login - replace with actual API call
      if (this.username === 'admin' && this.password === '11') {
        localStorage.setItem('authToken', 'mock-token');
        this.$router.push('/'); // Redirect to home page
      } else {
        this.errorMessage = 'Wrong ID or password!';
      }
    },
  },
};
</script>
