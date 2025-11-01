<script setup lang="ts">
import Container from './Container.vue';
import LanguageSelect from './LanguageSelect.vue';
import Logo from './Logo.vue';

</script>

<template>
  <header class="bg-slate-50 shadow-md">
    <Container class="flex items-center justify-between py-4 md:py-8 transition-all">
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <ul class="flex items-center gap-6 text-sm font-medium">
        <li>
          <RouterLink to="/" class="text-slate-900 hover:text-sky-600 transition-colors">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="text-slate-900 hover:text-sky-600 transition-colors">About Us</RouterLink>
        </li>
        <li>
          <RouterLink to="/services" class="text-slate-900 hover:text-sky-600 transition-colors">Services</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" class="text-slate-900 hover:text-sky-600 transition-colors">Contact</RouterLink>
        </li>
        <li>
          <LanguageSelect />
        </li>
      </ul>
    </Container>
  </header>
</template>
