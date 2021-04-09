<template>
  <a-button>按钮</a-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",

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
