<script setup lang="ts">
import { computed } from 'vue';
import Card from './Card.vue';
import Button from './Button.vue';
import Section from './Section.vue';
import Icon from './Icon.vue';

const categories = computed(() => [
  { title: 'Category 1', description: 'Description 1', img: 'https://placehold.co/200' },
  { title: 'Category 2', description: 'Description 2', img: 'https://placehold.co/200' },
  { title: 'Category 3', description: 'Description 3', img: 'https://placehold.co/200' },
  { title: 'Category 4', description: 'Description 4', img: 'https://placehold.co/200' },
]);

</script>

<template>
  <Section>
    <template #title>Our Selection</template>
    <template #subtitle>
      Explore our wide range of medical supplies designed to meet all your healthcare needs.
    </template>
    <template #content>
      <ul class="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

        <Card v-for="(categorie, index) in categories" :key="index"
          class="flex flex-col hover:scale-105 transition-all">
          <img class="rounded-2xl w-full aspect-video max-h-[220px] object-cover" :src="categorie.img" alt="product">
          <h2 class="font-semibold text-xl text-text-primary my-4">{{ categorie.title }}</h2>
          <p class="text-sm mb-4">{{ categorie.description }}</p>

          <div class="mt-auto">
            <Button size="sm" class="w-full justify-center">
              Explore
              <Icon icon="arrow-right" size="sm" />
            </Button>
          </div>
        </Card>
      </ul>
    </template>
  </Section>
</template>
