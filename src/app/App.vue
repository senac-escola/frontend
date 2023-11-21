<template>
  <i-layout vertical class="app _display:flex">
    <i-layout-aside
      :style="{
        display:
          currentRouteName == '/acessar'
            ? 'none'
            : currentRouteName == '/recuperar-senha'
            ? 'none'
            : 'flex',
      }"
    >
      <NavBar></NavBar>
    </i-layout-aside>
    <i-layout-content>
      <router-view></router-view>
    </i-layout-content>
  </i-layout>
</template>

<script lang="ts">
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  computed: {
    currentRouteName() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped lang="scss">
.app {
  height: 100vh !important;
  justify-content: space-between;
}
</style>
