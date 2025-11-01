<script setup lang="ts">
defineProps<{
  padding?: string;
}>();
</script>
<template>
  <section class="container custom-container mx-auto">
    <slot />
  </section>

</template>
<style lang="css" scoped>
.custom-container {
  width: min(100% - 2rem);
}
</style>
