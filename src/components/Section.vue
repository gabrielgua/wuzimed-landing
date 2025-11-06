<script setup lang="ts">
import Container from './Container.vue';

</script>

<template>
  <section class="pt-24 pb-24 transition-all relative overflow-hidden">
    <Container class="flex flex-col gap-12">
      <header>
        <h2 class="text-text-primary font-bold text-3xl mb-3" v-if="$slots['title']">
          <slot name="title">Title</slot>
        </h2>
        <p class="text-text-primary" v-if="$slots['subtitle']">
          <slot name="subtitle">Subtitle</slot>
        </p>
      </header>
      <slot name="content" />
    </Container>
  </section>
</template>
