<template>
  <a-layout class="layout">
    <a-layout-header>
      <LayoutHeader />
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      <LayoutFooter />
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import LayoutHeader from "./Header.vue";
import LayoutFooter from "./Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Layout",

  components: { LayoutHeader, LayoutFooter },

  data() {
    return {
      msg: "this is layout",
    };
  },

  mounted() {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
