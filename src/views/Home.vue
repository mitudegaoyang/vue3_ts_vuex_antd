<template>
  <div class="home">
    <h1>home</h1>
    <div>{{ msg }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  data() {
    return {
      // `list` will be reactive as it is declared via `data` hook.
      msg: "this is home",
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
