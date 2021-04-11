<template>
  <div class="home">
    <h1>home</h1>
    <div>{{ msg }}</div>
    <div>{{ count }}</div>
    <a-button @click="incCount">count++</a-button>
    <a-button @click="logout">logout</a-button>
    <div>{{ num }}</div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
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
    logout(): void {
      this.$router.push("login");
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
