<template>
  <div class="listDetail">
    <h1>detail{{ num }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListDetail",

  data() {
    return {
      num: "",
    };
  },

  mounted() {
    this.num = this.$route.params.bid.toString();
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
