<script setup lang="ts">
import Container from './Container.vue';
import Icon from './Icon.vue';
import LanguageSelect from './LanguageSelect.vue';
import Logo from './Logo.vue';

</script>

<template>
  <header class="bg-white shadow-2xl shadow-primary-300/40 sticky top-0 z-50">
    <Container class="flex items-center justify-between py-4 md:py-8 transition-all">
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <ul class="flex items-center gap-6 text-sm font-medium">
        <li>
          <RouterLink to="/" class="text-text-primary hover:text-primary-300 transition-colors">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="text-text-primary hover:text-primary-300 transition-colors">About Us
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/services" class="text-text-primary hover:text-primary-300 transition-colors">Services
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" class="text-text-primary hover:text-primary-300 transition-colors">Contact
          </RouterLink>
        </li>
        <li>
          <button
            class="flex items-center gap-2 bg-primary-900/10 px-3 py-1.5 rounded-xl hover:bg-primary-800/20 transition-colors">
            <Icon icon="magnifying-glass" size="sm" class="text-primary-950" />
            <p class="text-slate-600">Search</p>
          </button>
        </li>
        <li>
          <LanguageSelect />
        </li>
      </ul>
    </Container>
  </header>
</template>
