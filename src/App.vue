<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import { onMounted } from 'vue';

const { t } = useI18n();

//localize title
onMounted(() => {
  document.title = t('documentTitle');
})


</script>

<template>
  <div class="flex flex-col min-h-dvh">
    <Header />
    <RouterView />
    <Footer class="mt-auto" />
  </div>
</template>
