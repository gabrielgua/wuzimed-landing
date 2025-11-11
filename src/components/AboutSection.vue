<script setup lang="ts">
import Accordion from './Accordion.vue';
import Button from './Button.vue';
import Icon from './Icon.vue';
import Section from './Section.vue';


</script>

<template>
  <Section class="bg-linear-to-b from-primary-950 to-secondary-950 text-white">
    <template #title>
      <span class="text-white">{{ $t('aboutSectionTitle') }}</span>
    </template>
    <template #subtitle>
      <div class="text-slate-300">
        {{ $t('aboutSectionSubtitle') }}
      </div>
    </template>
    <template #content>
      <div class="grid lg:grid-cols-2 gap-16 transition-all border-b border-b-slate-800 pb-12">
        <div class="p-4 bg-white rounded-3xl max-h-max">
          <img src="../assets/images/aboutus.jpg" alt="Who we are" class="rounded-2xl w-full">
        </div>

        <div class="space-y-6">
          <div class="size-14 bg-white rounded-full grid place-items-center">
            <Icon icon="info-circle" class="text-2xl text-primary-500" />
          </div>
          <h2 class="font-bold text-3xl">{{ $t('aboutSectionWhoWeAreTitle') }}</h2>
          <div class="mb-6 text-base text-slate-300">
            {{ $t('aboutSectionWhoWeAreParagraph1') }}
          </div>
          <div class="mb-6 text-base text-slate-300">
            {{ $t('aboutSectionWhoWeAreParagraph2') }}
          </div>
          <Button variant="primary" size="lg" class="w-full justify-between lg:max-w-max">
            {{ $t('aboutSectionWhoWeAreCtaButton') }}
            <Icon icon="arrow-right" class="text-xs" />
          </Button>
        </div>

      </div>
      <div class="grid md:grid-cols-2 gap-6 md:gap-16 transition-all border-b border-b-slate-800 pb-12">
        <ul class="space-y-4 order-2">
          <Accordion>
            <template #icon>
              <Icon icon="martini-glass" />
            </template>
            <template #title>{{ $t('aboutSectionWhyChooseUsTopic1Title') }}</template>
            <template #content>{{ $t('aboutSectionWhyChooseUsTopic1Description') }}</template>
          </Accordion>
          <Accordion>
            <template #icon>
              <Icon icon="handshake" />
            </template>
            <template #title>{{ $t('aboutSectionWhyChooseUsTopic2Title') }}</template>
            <template #content>{{ $t('aboutSectionWhyChooseUsTopic2Description') }}</template>
          </Accordion>
          <Accordion>
            <template #icon>
              <Icon icon="shield-halved" />
            </template>
            <template #title>{{ $t('aboutSectionWhyChooseUsTopic3Title') }}</template>
            <template #content>{{ $t('aboutSectionWhyChooseUsTopic3Description') }}</template>
          </Accordion>
          <Accordion>
            <template #icon>
              <Icon icon="certificate" />
            </template>
            <template #title>{{ $t('aboutSectionWhyChooseUsTopic4Title') }}</template>
            <template #content>{{ $t('aboutSectionWhyChooseUsTopic4Description') }}</template>
          </Accordion>
        </ul>

        <div class="space-y-6 flex flex-col items-end text-right">
          <div class="size-14 bg-white rounded-full grid place-items-center">
            <Icon icon="bullseye" class="text-2xl text-primary-500" />
          </div>
          <h2 class="font-bold text-3xl">{{ $t('aboutSectionWhyChooseUsTitle') }}</h2>
          <p class="text-base text-slate-300">
            {{ $t('aboutSectionWhyChooseUsParagraph1') }}
          </p>
        </div>
      </div>
    </template>
  </Section>
</template>
