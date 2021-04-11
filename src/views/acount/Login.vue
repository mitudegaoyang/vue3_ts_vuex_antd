<template>
  <div class="login">
    <h1>login</h1>
    <h1>{{ msg }}</h1>
    <a-button @click="login">登录</a-button>
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

  methods: {
    login(): void {
      this.$store.commit("login");
      this.$router.push("home");
    },
  },

  created() {
    this.$store.commit("logout");
  },

  mounted() {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
