<script lang="ts" setup>
import { ref } from 'vue';


type Languages = 'en' | 'fr' | 'br';

const lang = ref<Languages>('en');

const languageOptions = [
  { value: 'en', text: 'EN' },
  { value: 'fr', text: 'FR' },
  { value: 'br', text: 'BR' },
]

const languages = new Map<string, string>([
  ['en', 'https://flagsapi.com/GB/shiny/16.png'],
  ['fr', 'https://flagsapi.com/FR/shiny/16.png'],
  ['br', 'https://flagsapi.com/BR/shiny/16.png']
]);

</script>

<template>
  <main class="flex items-center px-2 border border-slate-200 divide-x divide-slate-200 rounded-xl">
    <div class="p-2 ps-0">
      <img :src="languages.get(lang)">
    </div>

    <select v-model="lang" class="text-sm w-full md:w-max ps-1" name="lang" id="lang">
      <option v-for="option in languageOptions" class="text-text-primary" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </main>
</template>
