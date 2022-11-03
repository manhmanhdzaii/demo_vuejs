
<script setup>
import cpnHeader from "./components/includes/Header.vue";
import cpnFooter from "./components/includes/Footer.vue";
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <cpnHeader
    :count="this.$store.state.cart.length"
    :name="this.$store.state.name"
  />
  <RouterView />
  <cpnFooter />
</template>

<style scoped>
</style>
