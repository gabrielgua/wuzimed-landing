<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue';
import Container from './Container.vue';
import FadeFromTopTransition from './FadeFromTopTransition.vue';
import HeaderLinks from './HeaderLinks.vue';
import Icon from './Icon.vue';
import LanguageSelect from './LanguageSelect.vue';
import Logo from './Logo.vue';
import { useScrollLock } from '@/composables/useScrollLock';
import FadeTransition from './FadeTransition.vue';
import FadeInTransition from './FadeInTransition.vue';

const showHeaderMobile = ref(false);
useScrollLock(showHeaderMobile);
const toggleHeaderMobile = () => showHeaderMobile.value = !showHeaderMobile.value;

</script>

<template>
  <header class="bg-white shadow-2xl shadow-primary-300/40 sticky top-0 z-50 py-6 lg:py-8 space-y-6 md:space-y-0">
    <Container class="flex items-center justify-between transition-all">
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <HeaderLinks class="hidden md:flex" />
      <div class="hidden md:flex items-center gap-6">
        <Icon icon="magnifying-glass" size="sm" class="text-primary-950" />
        <LanguageSelect />
      </div>
      <Button @click="toggleHeaderMobile" variant="neutral-transparent" class="md:hidden">
        <FadeInTransition>
          <Icon v-if="showHeaderMobile" icon="xmark" size="lg" />
          <Icon v-else icon="bars" size="lg" />
        </FadeInTransition>
      </Button>
    </Container>
    <FadeFromTopTransition>
      <Container class="md:hidden" v-if="showHeaderMobile">
        <nav class="space-y-4 lg:space-y-8">
          <HeaderLinks @click="toggleHeaderMobile" class="flex-col items-start gap-4!" />
          <LanguageSelect @changed="toggleHeaderMobile" />
        </nav>
      </Container>
    </FadeFromTopTransition>
    <FadeTransition>
      <div v-if="showHeaderMobile" class="md:hidden absolute bg-black/50 w-full min-h-dvh" @click="toggleHeaderMobile">
      </div>
    </FadeTransition>
  </header>
</template>
