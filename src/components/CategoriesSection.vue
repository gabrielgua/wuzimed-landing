<script setup lang="ts">
import { computed } from 'vue';
import Card from './Card.vue';
import Button from './Button.vue';
import Section from './Section.vue';
import Icon from './Icon.vue';

import HealthCareImg from '@/assets/images/categories/healthcare.jpeg';
import SkinCareImg from '@/assets/images/categories/skincare.jpg'
import PersonalHygieneImg from '@/assets/images/categories/personalhygiene.jpg'
import PainReliefImg from '@/assets/images/categories/painreliefjpg.jpg'


const categories = computed(() => [
  { title: 'Health Care', description: 'Reliable medical supplies and health essentials.', img: HealthCareImg },
  { title: 'Skin Care', description: 'Everything your skin needs to stay healthy and radiant.', img: SkinCareImg },
  { title: 'Personal Hygiene', description: 'Designed to maintain hygiene and confidence throughout the day.', img: PersonalHygieneImg },
  { title: 'Pain Relief & Recovery', description: 'Ideal for post-workout recovery or everyday aches and pains.', img: PainReliefImg },
]);

</script>

<template>
  <Section>
    <template #title>Our Selection</template>
    <template #subtitle>
      Explore our wide range of medical supplies designed to meet all your healthcare needs.
    </template>
    <template #content>
      <ul class="gap-3 lg:gap-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 transition-all">

        <Card v-for="(categorie, index) in categories" :key="index"
          class="flex flex-col hover:scale-105 transition-all p-3! lg:p-4!">
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
