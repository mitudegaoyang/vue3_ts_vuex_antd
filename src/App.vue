<template>
  <ul>
    <li>
      <!-- <router-link to="/">home</router-link> -->
      <router-link :to="{ name: 'home' }">home</router-link>
      <router-link :to="{ name: 'list' }">list</router-link>
      <router-link :to="{ name: 'user' }">user</router-link>
      <!-- <router-link to="/user">user</router-link> -->
    </li>
  </ul>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
