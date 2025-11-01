<script setup lang="ts">
import Container from './Container.vue';
import Logo from './Logo.vue';

</script>

<template>
  <header class="bg-slate-900">
    <Container class="flex items-center justify-between py-4 md:py-8 transition-all">
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <ul class="flex items-center gap-6">
        <li>
          <RouterLink to="/" class="text-slate-300 hover:text-slate-100 transition-colors">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="text-slate-300 hover:text-slate-100 transition-colors">About Us</RouterLink>
        </li>
        <li>
          <RouterLink to="/services" class="text-slate-300 hover:text-slate-100 transition-colors">Services</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" class="text-slate-300 hover:text-slate-100 transition-colors">Contact</RouterLink>
        </li>
      </ul>
    </Container>
  </header>
</template>
