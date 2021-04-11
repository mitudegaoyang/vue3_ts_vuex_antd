<template>
  <div class="logo" />
  <a-menu
    theme="dark"
    mode="horizontal"
    v-model:selectedKeys="selectedKeys"
    :style="{ lineHeight: '64px' }"
  >
    <a-menu-item key="1">
      <router-link :to="{ name: 'home' }">home</router-link>
    </a-menu-item>
    <a-menu-item key="2">
      <router-link :to="{ name: 'list' }">list</router-link>
    </a-menu-item>
    <a-menu-item key="3">
      <router-link :to="{ name: 'user' }">user</router-link>
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, VNodeChild } from "vue";

interface MenuInfo {
  key: string;
  keyPath: string[];
  item: VNodeChild;
  domEvent: MouseEvent;
}

export default defineComponent({
  name: "Header",

  data() {
    return {
      msg: "this is header",
    };
  },

  setup() {
    const state = reactive({
      selectedKeys: ["1"],
      openKeys: ["1"],
    });
    const handleClick = (e: MenuInfo) => {
      console.log("click ", e);
    };
    return {
      ...toRefs(state),
      handleClick,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
