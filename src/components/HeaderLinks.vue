<script setup lang="ts">
import HeaderLink from './HeaderLink.vue';

</script>

<template>
  <ul class="flex items-center gap-6 text-sm font-medium">
    <HeaderLink to="/">{{ $t('headerHomeLink') }}</HeaderLink>
    <HeaderLink to="/about">{{ $t('headerAboutLink') }}</HeaderLink>
    <HeaderLink to="/partners">{{ $t('headerPartnersLink') }}</HeaderLink>
    <HeaderLink to="/contact">{{ $t('headerContactLink') }}</HeaderLink>
  </ul>
</template>
