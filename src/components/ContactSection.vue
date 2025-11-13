<script setup lang="ts">
import { Constants } from '@/utils/constants';
import Button from './Button.vue';
import Icon from './Icon.vue';
import Section from './Section.vue';

</script>

<template>
  <Section class="bg-linear-to-b from-white to-bg-base">
    <template #title>{{ $t('contactSectionTitle') }}</template>
    <template #subtitle>{{ $t('contactSectionSubtitle') }}</template>
    <template #content>
      <div class="flex flex-wrap items-center justify-between gap-12 ">
        <section class="space-y-6">
          <div class="flex items-center gap-4">
            <span class="size-10 grid place-items-center rounded-full bg-white shadow-xl border border-secondary-300">
              <Icon icon="phone" class="text-primary-500" />
            </span>
            <p class="font-medium text-text-primary">{{ $t('contactSectionPhoneNumber') }}</p>
          </div>
          <p class="font-base text-4xl md:text-5xl lg:text-6xl text-text-primary">{{ Constants.contactPhone }}</p>
        </section>

        <section class="space-y-6">
          <div class="flex items-center gap-4">
            <span class="size-10 grid place-items-center rounded-full bg-white shadow-xl border border-secondary-300">
              <Icon icon="envelope" class="text-primary-500" />
            </span>
            <p class="font-medium">{{ $t('contactSectionEmailAddress') }}</p>
          </div>
          <p class="font-base text-4xl md:text-5xl lg:text-6xl break-all lg:break-normal text-text-primary">
            {{ Constants.contactEmail }}
          </p>
        </section>


      </div>
      <Button variant="secondary" size="lg" class="w-full justify-between lg:max-w-max">
        {{ $t('contactSectionCtaButton') }}
        <Icon icon="arrow-right" class="text-xs" />
      </Button>
    </template>
  </Section>
</template>
