import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLangStore = defineStore('lang', () => {
  const locale = ref<string>(localStorage.getItem('locale') || 'en')

  const setLocale = (newLocale: string) => {
    localStorage.setItem('locale', newLocale)
  }

  return { locale, setLocale }
})
