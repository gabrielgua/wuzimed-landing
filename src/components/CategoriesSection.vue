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
import { useI18n } from 'vue-i18n';

const { t } = useI18n();


const categories = computed(() => [
  { title: t('categoriesSectionItem1Title'), description: t('categoriesSectionItem1Description'), img: HealthCareImg },
  { title: t('categoriesSectionItem2Title'), description: t('categoriesSectionItem2Description'), img: SkinCareImg },
  { title: t('categoriesSectionItem3Title'), description: t('categoriesSectionItem3Description'), img: PersonalHygieneImg },
  { title: t('categoriesSectionItem4Title'), description: t('categoriesSectionItem4Description'), img: PainReliefImg },
]);

</script>

<template>
  <Section>
    <template #title>{{ $t('categoriesSectionTitle') }}</template>
    <template #subtitle>
      {{ $t('categoriesSectionSubtitle') }}
    </template>
    <template #content>
      <ul class="gap-3 lg:gap-4 grid sm:grid-cols-2 lg:grid-cols-4 transition-all">

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
