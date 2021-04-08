<template>
  <div class="list">
    <h1>list</h1>
    <div v-for="(item, index) in brandList" :key="index">
      <router-link :to="`/list/detail/${index}`">{{ item }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

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

  created() {
    this.$store.commit("getList");
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.list.push(`我是第${i}项`);
    }
  },

  computed: {
    ...mapState({
      num: (state: any) => state.count,
      brandList: (state: any) => state.list,
    }),
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
