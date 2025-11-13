<script setup lang="ts">
defineProps<{ to: string }>();
</script>

<template>
  <RouterLink :to="to" class="transition-all">
    <slot />
  </RouterLink>
</template>
