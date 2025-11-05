<script setup lang="ts">
import Button from './Button.vue';
import Container from './Container.vue';
import Icon from './Icon.vue';


</script>

<template>
  <main
    class="relative py-12 md:py-24 inset-shadow-[-1px_-7px_33px_12px_rgba(255,255,255,0.1)] inset-shadow-white/80 bg-primary-100">
    <svg class="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="var(--color-white)"
        d="M0,192L80,181.3C160,171,320,149,480,144C640,139,800,149,960,160C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
      </path>
    </svg>
    <Container class="flex items-center justify-between gap-6">
      <div
        class="relative max-w-[750px] flex flex-col items-start gap-12 border overflow-hidden border-primary-500/50 rounded-3xl shadow-xl bg-white/80 p-8">

        <Icon icon="info-circle" class="text-primary-500" />
        <div class="flex flex-col gap-6">
          <h1 class="text-4xl font-bold text-text-primary">
            <span class="text-primary-500">Welcome</span>
            to WuziMed,
            <br>
            here to help you manage your
            <span class="text-primary-500">medical</span>
            supplies
          </h1>
          <p class="text-text-primary font-light text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perspiciatis debitis ex voluptate, cum earum
            deserunt totam ratione culpa reiciendis maiores quibusdam iste nulla. Est ducimus veritatis incidunt.
            Eveniet, quas?
          </p>
        </div>


        <Button variant="primary" size="lg" class="max-w-max">
          More information
          <Icon icon="arrow-right" size="sm" />
        </Button>
      </div>
    </Container>
  </main>
</template>

<style lang="css" scoped>
main {
  background-image: radial-gradient(var(--color-primary-500) 1px, transparent 0);
  background-size: 2.5rem 2.5rem;
  background-position: -19px -10px;
}
</style>
