<script setup lang="ts">
import PartnerBrandBox from './PartnerBrandBox.vue';
import Section from './Section.vue';

</script>

<template>
  <Section class="bg-bg-base bg-[url('/src/assets/svgs/wave_blue.svg')] bg-no-repeat bg-cover bg-center">
    <template #title>
      Our Partners
    </template>
    <template #subtitle>
      We collaborate with leading medical suppliers to bring you the best products available.
    </template>
    <template #content>
      <div
        class="flex flex-wrap items-center z-10 justify-between gap-10 bg-white border border-slate-200 p-7 shadow-2xl shadow-primary-100/20 rounded-xl">

        <PartnerBrandBox>
          <img src="../assets/images/partners/bd.jpeg" alt="BD" class="scale-80" />
        </PartnerBrandBox>
        <PartnerBrandBox>
          <img src="../assets/images/partners/bunzil.jpeg" alt="Bunzil" class="scale-200" />
        </PartnerBrandBox>
        <PartnerBrandBox>
          <img src="../assets/images/partners/cardinal_health.jpeg" alt="Cardinal Health" class="scale-180" />
        </PartnerBrandBox>
        <PartnerBrandBox>
          <img src="../assets/images/partners/coloplast.jpeg" alt="Coloplast" />
        </PartnerBrandBox>
        <PartnerBrandBox>
          <img src="../assets/images/partners/mckesson_canada.jpeg" alt="McKesson Canada" class="scale-220" />
        </PartnerBrandBox>
        <PartnerBrandBox>
          <img src="../assets/images/partners/medline.jpeg" alt="Medline" class="max-h-full" />
        </PartnerBrandBox>
        <PartnerBrandBox>
          <img src="../assets/images/partners/primed.jpeg" alt="Primed" class="scale-120" />
        </PartnerBrandBox>
        <PartnerBrandBox>
          <img src="../assets/images/partners/stevens.jpeg" alt="Stevens" class="scale-120" />
        </PartnerBrandBox>
        <PartnerBrandBox>
          <img src="../assets/images/partners/terumo.jpeg" alt="Terumo" class="scale-110" />
        </PartnerBrandBox>
      </div>
    </template>
  </Section>
</template>
