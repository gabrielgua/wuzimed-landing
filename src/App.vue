<script setup lang="ts">
import AboutSection from './components/AboutSection.vue';
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

  <Section class="bg-slate-50">
    <template #title>
      Get in Touch
    </template>
    <template #subtitle>
      If you have any questions or would like to learn more about our services, please don't hesitate to reach out.
      We're here to help!
    </template>
    <template #content>

      <form>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </template>
  </Section>
  <Section class="bg-primary-500">

    <template #content>
      <div class="flex items-center justify-between">
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="size-10 grid place-items-center bg-white rounded-full">
              <Icon icon="phone" class="text-primary-500" />
            </span>
            <p class="text-lg font-medium text-white">Phone Number</p>
          </div>
          <p class="text-5xl font-medium text-white">+1 (234) 567-8901</p>
        </div>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="size-10 grid place-items-center bg-white rounded-full">
              <Icon icon="envelope" class="text-primary-500" />
            </span>
            <p class="text-lg font-medium text-white">Email</p>
          </div>
          <p class="text-5xl font-medium text-white">support.help@wuzimed.com</p>
        </div>
      </div>
    </template>
  </Section>

</template>
