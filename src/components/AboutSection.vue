<script setup lang="ts">
import Accordion from './Accordion.vue';
import Button from './Button.vue';
import Icon from './Icon.vue';
import Section from './Section.vue';

</script>

<template>
  <Section class="bg-linear-to-b from-primary-950 to-secondary-950 text-white">
    <template #title>
      <span class="text-white">About us</span>
    </template>
    <template #subtitle>
      <div class="text-slate-300">
        We are committed to delivering the best services to our clients, ensuring quality and excellence in every
        project we undertake.
      </div>
    </template>
    <template #content>
      <div class="grid md:grid-cols-2 xl:grid-cols-[auto_1fr] gap-16 transition-all border-b border-b-slate-800 pb-12">
        <div class="p-4 bg-white rounded-3xl">
          <img src="https://placehold.co/750x500" alt="" class="rounded-2xl">
        </div>

        <div class="space-y-6">
          <div class="size-14 bg-white rounded-full grid place-items-center">
            <Icon icon="info-circle" class="text-2xl text-primary-500" />
          </div>
          <h2 class="font-bold text-3xl">Who we are?</h2>
          <div class="mb-6 text-base text-slate-300">
            Our company has been at the forefront of innovation, consistently pushing the boundaries to deliver
            exceptional value to our customers. With a dedicated team of professionals, we strive to exceed
            expectations and foster long-term relationships built on trust and integrity.
          </div>
          <div class="mb-6 text-base text-slate-300">
            We believe in a customer-centric approach, tailoring our solutions to meet the unique needs of each client.
            Our commitment to excellence is reflected in our rigorous quality standards and continuous improvement
            initiatives.
          </div>
          <Button variant="primary" size="lg" class="w-full justify-between lg:max-w-max">
            Learn More
            <Icon icon="arrow-right" class="text-xs" />
          </Button>
        </div>

      </div>
      <div
        class="grid md:grid-cols-2 xl:grid-cols-[1fr_2fr] gap-6 md:gap-16 transition-all border-b border-b-slate-800 pb-12">
        <ul class="space-y-4 order-2">
          <Accordion>
            <template #icon>
              <Icon icon="martini-glass" />
            </template>
            <template #title>High-Quality Products</template>
            <template #content>
              Carefully sourced and crafted, our products meet the highest standards of quality and reliability.
            </template>
          </Accordion>
          <Accordion>
            <template #icon>
              <Icon icon="handshake" />
            </template>
            <template #title>Expertise & Commitment</template>
            <template #content>
              Our team of professionals is dedicated to providing exceptional service and support to our clients.
            </template>
          </Accordion>
          <Accordion>
            <template #icon>
              <Icon icon="shield-halved" />
            </template>
            <template #title>Trusted & Reliable</template>
            <template #content>
              We have built a reputation for reliability and trustworthiness in the industry over the years.
            </template>
          </Accordion>
          <Accordion>
            <template #icon>
              <Icon icon="certificate" />
            </template>
            <template #title>Quality Assurance</template>
            <template #content>
              We adhere to the highest standards of quality in all our services, ensuring that our clients receive
              nothing but the best.
            </template>
          </Accordion>
        </ul>

        <div class="space-y-6">
          <div class="size-14 bg-white rounded-full grid place-items-center">
            <Icon icon="bullseye" class="text-2xl text-primary-500" />
          </div>
          <h2 class="font-bold text-3xl">Why choose us?</h2>
          <p class="text-base text-slate-300">
            Choosing us means partnering with a team that is dedicated to your success. We bring a wealth of
            experience and expertise to the table, ensuring that our solutions are not only effective but also
            innovative and forward-thinking.
          </p>
        </div>
      </div>
    </template>
  </Section>
</template>
