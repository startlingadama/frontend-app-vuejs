<template>
  <div>
    <h2>Users list</h2>
    <div class="list-group">
      <button v-for="(user, index) in users" :key="index" type="button" class="list-group-item list-group-item-action">
        {{user.first_name}} {{user.last_name}}
      </button>
    </div>
  </div>  
</template>

<script>

import userService from '../services/UserService.js'

export default {
  name: 'Users',
  props: {},
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    userService.getAll()
      .then(response => this.users = response);
  },
}
</script>

<style>

</style>