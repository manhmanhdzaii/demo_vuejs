
<script setup>
import cpnHeader from "./components/includes/Header.vue";
import cpnFooter from "./components/includes/Footer.vue";
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <cpnHeader
    :count="this.$store.state.cart.length"
    :name="this.$store.state.name"
    v-if="this.$store.state.page_login"
  />
  <RouterView />
  <cpnFooter v-if="this.$store.state.page_login" />
</template>

<style scoped>
</style>
