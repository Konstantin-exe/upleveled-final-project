<template>
  <portal to="login-field">
    <form name="user-auth">
      <div class="form-control">
        <label for="name">Username</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" />
      </div>
      <base-button>Login</base-button>
      <base-button type="button" mode="flat">Signup</base-button>
    </form>
  </portal>
</template>

<style>
@import '../../src/assets/css/style.css';
</style>

<script>
export default {
  name: 'UserAuth',
};
</script>
