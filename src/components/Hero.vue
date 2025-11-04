<script setup lang="ts">
import Container from './Container.vue';

</script>

<template>
  <Container>
    <div class="flex flex-col items-center text-center pt-20 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
        Empower Your Health with Wuzimed
      </h1>
      <p class="mt-6 text-lg text-gray-600 sm:text-xl max-w-2xl">
        Discover personalized health insights and take control of your well-being with our cutting-edge platform.
      </p>
      <div class="mt-8 flex space-x-4">
        <a href="#get-started"
          class="px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700">
          Get Started
        </a>
        <a href="#learn-more"
          class="px-6 py-3 bg-gray-200 text-gray-800 rounded-md text-lg font-medium hover:bg-gray-300">
          Learn More
        </a>
      </div>
    </div>
  </Container>
</template>
