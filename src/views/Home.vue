<template>
  <div class="home">
    <h1>home</h1>
    <div>{{ msg }}</div>
    <div>{{ count }}</div>
    <button @click="incCount">count++</button>
    <div>{{ num }}</div>
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
  methods: {
    incCount(): void {
      this.$store.commit("incCount");
    },
  },
  computed: {
    count(): number {
      return this.$store.state.count;
    },
    num(): number {
      return this.$store.getters.num;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
