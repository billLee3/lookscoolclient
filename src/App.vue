<script setup>
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<!-- Scoped to just this component -->
<style scoped></style>
