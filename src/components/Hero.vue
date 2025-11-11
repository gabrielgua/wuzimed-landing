<script setup lang="ts">
import Button from './Button.vue';
import Container from './Container.vue';
import Icon from './Icon.vue';


</script>

<template>
  <section class="relative py-6 md:py-12 bg-bg-base bg-dotted">
    <div
      class="absolute w-full h-full bottom-0 left-0 bg-[url('/src/assets/svgs/wave_white.svg')] bg-no-repeat bg-cover bg-bottom">

    </div>
    <Container class="grid place-items-center">
      <div
        class="relative max-w-[750px] flex flex-col items-start gap-12 border border-primary-500/50 rounded-3xl shadow-xl bg-white/80 p-8">

        <Icon icon="hand-sparkles" class="text-primary-500 text-2xl" />
        <div class="flex flex-col gap-6">
          <h1 class="text-4xl">
            <span class="text-primary-500 font-bold ">
              {{ $t('heroSectionTitle') }}
            </span>
            <br>
            <span class="font-semibold text-text-primary">
              {{ $t('heroSectionTitleFollowUp') }}
            </span>
          </h1>
          <p class="text-text-primary font-light text-sm">
            {{ $t('heroSectionSubtitle') }}
          </p>
        </div>
        <Button variant="primary" size="lg" class="w-full justify-between">
          {{ $t('heroSectionCtaButton') }}
          <Icon icon="arrow-right" size="sm" />
        </Button>
      </div>
    </Container>
  </section>
</template>

<style lang="css" scoped>
.bg-dotted {
  background-image: radial-gradient(var(--color-primary-500) 1px, transparent 0);
  background-size: 2.5rem 2.5rem;
  background-position: -19px -10px;
}
</style>
