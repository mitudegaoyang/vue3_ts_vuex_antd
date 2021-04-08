<template>
  <div class="user">
    <h1>user</h1>
    <h1>{{ msg }}</h1>
    <div>{{ count }}</div>
    <button @click="incCount">count++</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "User",

  data() {
    return {
      // `list` will be reactive as it is declared via `data` hook.
      msg: "this is user",
    };
  },
  methods: {
    incCount(): void {
      this.$store.commit("incCount");
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
