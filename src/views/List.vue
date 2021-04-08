<template>
  <div class="list">
    <h1>list</h1>
    <div v-for="(item, index) in list" :key="index">
      <!-- {{ item }} -->
      <router-link :to="`/list/detail/${index}`">{{ item }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Brand {
  list: string[];
}

export default defineComponent({
  name: "List",

  data() {
    return {
      // `list` will be reactive as it is declared via `data` hook.
      list: [],
    } as Brand;
  },

  mounted() {
    for (let i = 0; i < 10; i++) {
      this.list.push(`我是第${i}项`);
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
