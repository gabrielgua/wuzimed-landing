<script setup lang="ts">
defineProps<{ to: string }>();
</script>

<template>
  <RouterLink :to="to" active-class="font-bold underline decoration-2 text-primary-500" class="transition-all">
    <slot />
  </RouterLink>
</template>
