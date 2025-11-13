<script setup lang="ts">
import { ref } from 'vue';
import Card from './Card.vue';
import Icon from './Icon.vue';
import FadeFromTopTransition from './transitions/FadeFromTopTransition.vue';

const showContent = ref(false)
</script>

<template>
  <Card
    class="shadow-none! space-y-4 transition-all cursor-pointer ring-2 ring-transparent ring-offset-slate-900 hover:ring-primary-500 hover:ring-offset-2 active:scale-95"
    @click="showContent = !showContent">
    <div class="flex items-center gap-4 transition-all">
      <div class="text-xl text-primary-500">
        <slot name="icon" />
      </div>

      <h3 class="font-bold text-base text-text-primary">
        <slot name="title" />
      </h3>
      <Icon icon="angle-down" class="text-sm text-text-secondary ml-auto transition-all"
        :class="{ 'rotate-180': showContent }" />
    </div>
    <FadeFromTopTransition>
      <p v-if="showContent" class="text-text-secondary font-medium">
        <slot name="content" />
      </p>
    </FadeFromTopTransition>
  </Card>

</template>
