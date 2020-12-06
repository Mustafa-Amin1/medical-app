<template>
  <div id="app">
    <!-- header -->
    <app-header></app-header>
    <!-- router view -->
    <router-view />

    <!-- footer -->
    <app-footer></app-footer>

  </div>
</template>

<script>
import AppHeader from "../app/shared/components/app-header/nav.vue";
import AppFooter from "../app/shared/components/app-footer/footer.vue";

export default {
  name: "app",
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter,
  },
};
</script>
<style lang="scss">
</style>
