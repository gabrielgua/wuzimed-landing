<script setup lang="ts">
import Icon from './Icon.vue';
import LanguageSelect from './LanguageSelect.vue';

</script>

<template>
  <ul class="flex items-center gap-6 text-sm font-medium">
    <li>
      <RouterLink to="/" class="text-text-primary hover:text-primary-500 transition-colors">Home</RouterLink>
    </li>
    <li>
      <RouterLink to="/about" class="text-text-primary hover:text-primary-500 transition-colors">About Us
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/partners" class="text-text-primary hover:text-primary-500 transition-colors">
        Partners
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/contact" class="text-text-primary hover:text-primary-500 transition-colors">Contact
      </RouterLink>
    </li>

  </ul>
</template>
