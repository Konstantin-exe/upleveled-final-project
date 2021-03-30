<template>
  <form v-show="loginOpen" name="user-auth">
    <div class="form-control">
      <label for="name">Username</label>
      <input type="text" id="name" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" />
    </div>
    <a type="button">Login</a>
    <a type="button" mode="flat">Signup</a>
  </form>
</template>

<style>
@import '../../src/assets/css/style.css';
</style>

<script>
export default {
  name: 'UserAuth',

  props: {
    loginOpen: {
      required: true,
    },
  },
};
</script>
