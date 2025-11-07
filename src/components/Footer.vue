<script setup lang="ts">
import Container from './Container.vue';
import FooterSection from './FooterSection.vue';
import Icon from './Icon.vue';
import Logo from './Logo.vue';

</script>

<template>
  <footer class="bg-secondary-950 pt-12 pb-6">
    <Container class="flex flex-wrap justify-between *:grow ">
      <div class="space-y-4">
        <Logo />
        <p class="text-secondary-200 text-sm font-light">
          Welcome to WuziMed,
          <br>
          here to help you manage your health care needs!
        </p>

      </div>
      <FooterSection>
        <template #title>Socials</template>
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
        <template #title>Quick Links</template>
        <div class="flex flex-col gap-2">
          <RouterLink to="/" class="text-primary-500 text-sm font-medium">Home</RouterLink>
          <RouterLink to="/" class="text-primary-500 text-sm font-medium">About us</RouterLink>
          <RouterLink to="/" class="text-primary-500 text-sm font-medium">Partners</RouterLink>
          <RouterLink to="/" class="text-primary-500 text-sm font-medium">Contact</RouterLink>
        </div>
      </FooterSection>
      <FooterSection>
        <template #title>Contact</template>
        <div class="font-medium text-sm text-bg-base">
          <p>+1 (12) 0345-6789</p>
          <p>support.help@wuzimed.com</p>
        </div>
      </FooterSection>
      <FooterSection>
        <template #title>Location</template>
        <p class="font-medium text-bg-base text-sm">São Paulo, BR</p>
      </FooterSection>
    </Container>
    <Container class="py-6">
      <hr class="border-slate-800" />
    </Container>
    <Container class="flex items-center justify-between gap-6  text-xs text-bg-base">
      <p>&copy; 2025 WuziMed. All rights reserved.</p>
      <p>
        Develped by
        <a href="https://github.com/gabrielgua" target="_blank" class="text-primary-600 hover:underline">
          @gabrielgua</a>
      </p>
    </Container>
  </footer>
</template>
