<template>
  <div class="login">
    <h1>login</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",

  data() {
    return {
      msg: "this is login",
    };
  },

  mounted() {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
