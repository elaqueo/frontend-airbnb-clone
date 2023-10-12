<template>
  <button
    class="relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 w-full transition"
    :class="variants()"
    @click="emit('OnClick')"
    :disabled="disabled"
  >
    {{ label }}
    <Icon
      v-if="icon"
      :icon="icon"
      font-size="24"
      class="absolute left-4 top-3"
    />
  </button>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';

type ButtonProps = {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: string;
}
const { label, disabled, outline, small } = defineProps<ButtonProps>();

const emit = defineEmits(['OnClick']);

const variants = () => ({
  'bg-white border-black text-black': outline,
  'bg-rose-500 border-rose-500 text-white': !outline,
  'py-1 text-sm font-light border-[1px]': small,
  'py-3 text-md font-semibold border-2': !small
})
</script>
