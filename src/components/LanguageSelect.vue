<script lang="ts" setup>
import { useLangStore } from '@/stores/lang.store';
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';

const emit = defineEmits(['changed'])

const { locale } = useI18n();
const langStore = useLangStore();
locale.value = langStore.locale;

watch(() => langStore.locale, (newLocale) => {
  locale.value = newLocale;
})

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

const change = () => {
  langStore.setLocale(langStore.locale);
  emit('changed');
}



</script>

<template>
  <main class="flex items-center px-2 border border-slate-200 divide-x divide-slate-200 rounded-xl">
    <div class="p-2 ps-0">
      <img :src="languages.get(langStore.locale)" alt="Language Flag" />
    </div>

    <select v-model="langStore.locale" @change="change()" class="text-sm w-full md:w-max ps-1" name="lang" id="lang">
      <option v-for="option in languageOptions" class="text-text-primary" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </main>
</template>
