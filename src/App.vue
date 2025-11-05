<script setup lang="ts">
import { computed } from 'vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Section from './components/Section.vue';
import Card from './components/Card.vue';
import Button from './components/Button.vue';
import Icon from './components/Icon.vue';
import PartnerBrandBox from './components/PartnerBrandBox.vue';
import Container from './components/Container.vue';

const categories = computed(() => [
  { title: 'Category 1', description: 'Description 1', img: 'https://placehold.co/200' },
  { title: 'Category 2', description: 'Description 2', img: 'https://placehold.co/200' },
  { title: 'Category 3', description: 'Description 3', img: 'https://placehold.co/200' },
  { title: 'Category 4', description: 'Description 4', img: 'https://placehold.co/200' },
]);

</script>

<template>
  <Header />
  <Hero />
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

  <Section class="bg-slate-50 bg-[url('/src/assets/svgs/wave.svg')] bg-no-repeat bg-cover bg-center"
    :style="{ '--wave-color': 'var(--color-primary-950)' }">
    <template #title>
      <div class="text-center">Our Partners</div>
    </template>
    <template #subtitle>
      <div class="text-center">
        We collaborate with leading medical suppliers to bring you the best products available.
      </div>
    </template>
    <template #content>

      <div
        class="flex flex-wrap items-center z-10 justify-between gap-10 bg-white border border-slate-200 p-7 shadow-2xl shadow-primary-100/20 rounded-xl">

        <PartnerBrandBox>
          <img src="../src/assets/images/partners/bd.jpeg" alt="BD" class="scale-80" />
        </PartnerBrandBox>
        <PartnerBrandBox>
          <img src="../src/assets/images/partners/bunzil.jpeg" alt="Bunzil" class="scale-200" />
        </PartnerBrandBox>
        <PartnerBrandBox>
          <img src="../src/assets/images/partners/cardinal_health.jpeg" alt="Cardinal Health" class="scale-180" />
        </PartnerBrandBox>
        <PartnerBrandBox>
          <img src="../src/assets/images/partners/coloplast.jpeg" alt="Coloplast" />
        </PartnerBrandBox>
        <PartnerBrandBox>
          <img src="../src/assets/images/partners/mckesson_canada.jpeg" alt="McKesson Canada" class="scale-220" />
        </PartnerBrandBox>
        <PartnerBrandBox>
          <img src="../src/assets/images/partners/medline.jpeg" alt="Medline" class="max-h-full" />
        </PartnerBrandBox>
        <PartnerBrandBox>
          <img src="../src/assets/images/partners/primed.jpeg" alt="Primed" class="scale-120" />
        </PartnerBrandBox>
        <PartnerBrandBox>
          <img src="../src/assets/images/partners/stevens.jpeg" alt="Stevens" class="scale-120" />
        </PartnerBrandBox>
        <PartnerBrandBox>
          <img src="../src/assets/images/partners/terumo.jpeg" alt="Terumo" class="scale-110" />
        </PartnerBrandBox>
      </div>
    </template>
  </Section>

  <Section class="bg-primary-950 text-white">


  </Section>
</template>
