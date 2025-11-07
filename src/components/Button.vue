<script lang="ts" setup>
export type ButtonProps = {
  variant?: ButtonVariant,
  size?: ButtonSize
}

export type ButtonVariant = 'primary' | 'secondary' | 'neutral' | 'neutral-transparent';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';


withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md'
});

const buttonStyles = new Map<ButtonVariant, string>([
  ['primary', 'text-white bg-linear-to-b from-sky-400 to-primary-600'],
  ['secondary', 'text-white bg-linear-to-b from-secondary-700 to-secondary-950'],
  ['neutral', 'text-text-primary bg-linear-to-b from-white to-secondary-400'],
  ['neutral-transparent', 'text-text-primary bg-none p-0!']
])

const buttonSizes = new Map<ButtonSize, string>([
  ['xs', 'p-2 px-3 text-xs gap-3'],
  ['sm', 'p-2 px-3 text-sm gap-3'],
  ['md', 'p-3 px-4 text-sm gap-4'],
  ['lg', 'p-4 px-5 text-base gap-5 font-medium'],
  ['xl', 'p-5 px-6 text-lg gap-6 font-medium'],
])

</script>

<template>
  <button class="flex items-center rounded-full active:scale-[98%] cursor-pointer transition-all"
    :class="[buttonStyles.get(variant), buttonSizes.get(size)]">
    <slot />
  </button>
</template>
