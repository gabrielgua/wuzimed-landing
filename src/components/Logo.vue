<script setup lang="ts">
import LogoDefault from '@/assets/images/wuzimed_logo_black.png';
import LogoLight from '@/assets/images/wuzimed_logo_white.png';

defineProps<{ variant?: 'default' | 'light' }>();

</script>

<template>
  <img :src="variant === 'light' ? LogoLight : LogoDefault" alt="Wuzi Med Logo" class="w-[120px] -ml-1" />
</template>
