<script setup lang="ts">
import HeaderLink from './HeaderLink.vue';

</script>

<template>
  <ul class="flex items-center gap-6 text-sm font-medium">
    <HeaderLink to="/">Home</HeaderLink>
    <HeaderLink to="/about">About Us</HeaderLink>
    <HeaderLink to="/partners">Partners</HeaderLink>
    <HeaderLink to="/contact">Contact</HeaderLink>
  </ul>
</template>
