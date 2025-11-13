<script setup lang="ts">
import { Constants } from '@/utils/constants';
import Container from './Container.vue';
import FooterSection from './FooterSection.vue';
import Icon from './Icon.vue';
import Logo from './Logo.vue';

</script>

<template>
  <footer class="bg-secondary-950 pt-6 md:pt-12 pb-6">
    <Container class="flex flex-wrap justify-between gap-12 *:grow ">
      <div class="space-y-4">
        <Logo variant="light" />
        <p class="text-secondary-200 text-sm font-light">
          {{ $t('footerHeroText1') }}
          <br>
          {{ $t('footerHeroText2') }}
        </p>

      </div>
      <FooterSection>
        <template #title>{{ $t('footerSocialsTitle') }}</template>
        <div class="flex items-center gap-2">
          <div class="size-10 rounded-xl bg-bg-base grid place-items-center text-text-primary">
            <Icon icon="fa-brands fa-instagram" class="text-2xl" />
          </div>
          <div class="size-10 rounded-xl bg-bg-base grid place-items-center text-text-primary">
            <Icon icon="fa-brands fa-twitter" class="text-2xl" />
          </div>
          <div class="size-10 rounded-xl bg-bg-base grid place-items-center text-text-primary">
            <Icon icon="fa-brands fa-whatsapp" class="text-2xl" />
          </div>
          <div class="size-10 rounded-xl bg-bg-base grid place-items-center text-text-primary">
            <Icon icon="fa-brands fa-telegram" class="text-2xl" />
          </div>
        </div>
      </FooterSection>
      <FooterSection>
        <template #title>{{ $t('footerQuickLinksTitle') }}</template>
        <div class="flex flex-col gap-2">
          <RouterLink to="/" class="text-primary-500 text-sm font-medium">{{ $t('footerQuickLink1') }}</RouterLink>
          <RouterLink to="/" class="text-primary-500 text-sm font-medium">{{ $t('footerQuickLink2') }}</RouterLink>
          <RouterLink to="/" class="text-primary-500 text-sm font-medium">{{ $t('footerQuickLink3') }}</RouterLink>
          <RouterLink to="/" class="text-primary-500 text-sm font-medium">{{ $t('footerQuickLink4') }}</RouterLink>
        </div>
      </FooterSection>
      <FooterSection>
        <template #title>{{ $t('footerContactTitle') }}</template>
        <div class="font-medium text-sm text-bg-base">
          <p>{{ Constants.contactPhone }}</p>
          <p>{{ Constants.contactEmail }}</p>
        </div>
      </FooterSection>
      <FooterSection>
        <template #title>{{ $t('footerLocationTitle') }}</template>
        <p class="font-medium text-bg-base text-sm">{{ $t('footerLocationAddressLine1') }}</p>
      </FooterSection>
    </Container>
    <Container class="py-6">
      <hr class="border-slate-800" />
    </Container>
    <Container class="flex items-center justify-between gap-6  text-xs text-bg-base">
      <p>&copy; 2025 WuziMed. {{ $t('footerRightsReserved') }}</p>
      <p>
        {{ $t('footerDevelopedBy') }}
        <a href="https://github.com/gabrielgua" target="_blank" class="text-primary-600 hover:underline">
          @gabrielgua</a>
      </p>
    </Container>
  </footer>
</template>
