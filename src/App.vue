<script setup>
  import Navbar from '@/components/includes/Navbar.vue'
  import Footer from '@/components/includes/Footer.vue';
  import { RouterView } from 'vue-router';
</script>
<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>