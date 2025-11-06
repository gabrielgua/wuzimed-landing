<script setup lang="ts">
import AboutSection from './components/AboutSection.vue';
import Button from './components/Button.vue';
import CategoriesSection from './components/CategoriesSection.vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Icon from './components/Icon.vue';
import PartnersSection from './components/PartnersSection.vue';
import Section from './components/Section.vue';


</script>

<template>
  <Header />
  <Hero />
  <CategoriesSection />
  <PartnersSection />
  <AboutSection />

  <Section class="bg-linear-to-b from-white to-bg-base">
    <template #title>
      Get in touch
    </template>
    <template #subtitle>
      If you have any questions or would like to learn more about our services, please don't hesitate to reach out.
      We're here to help!
    </template>
    <template #content>
      <div class="flex flex-wrap items-center justify-between gap-12 ">
        <section class="space-y-6">
          <div class="flex items-center gap-4">
            <span class="size-10 grid place-items-center rounded-full bg-white shadow-xl border border-secondary-300">
              <Icon icon="phone" class="text-primary-500" />
            </span>
            <p class="font-medium text-text-primary">Phone Number</p>
          </div>
          <p class="font-base text-4xl md:text-5xl lg:text-6xl text-text-primary">+1 (23) 4567-8910</p>
        </section>

        <section class="space-y-6">
          <div class="flex items-center gap-4">
            <span class="size-10 grid place-items-center rounded-full bg-white shadow-xl border border-secondary-300">
              <Icon icon="envelope" class="text-primary-500" />
            </span>
            <p class="font-medium">Email</p>
          </div>
          <p class="font-base text-4xl md:text-5xl lg:text-6xl break-all lg:break-normal text-text-primary">
            support.help@wuzimed.com
          </p>
        </section>


      </div>
      <Button variant="secondary" size="xl" class="w-full justify-between lg:max-w-max">
        Contact us
        <Icon icon="arrow-right" class="text-xs" />
      </Button>
    </template>
  </Section>


</template>
