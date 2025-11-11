<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue';
import CategoriesSection from '@/components/CategoriesSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import Hero from '@/components/Hero.vue';
import PartnersSection from '@/components/PartnersSection.vue';

</script>

<template>
  <Hero />
  <CategoriesSection id="products" />
  <PartnersSection />
  <AboutSection />
  <ContactSection />
</template>
