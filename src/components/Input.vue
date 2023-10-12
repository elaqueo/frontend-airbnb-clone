<template>
  <div class="w-full relative">
    <Icon
      v-if="formatPrice"
      icon="bx:dollar"
      fonst-size="24"
      class="text-neutral-700 absolute top-5 left-2"
    />

    <input
      :id="id"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target?.value)"
      :disabled="disabled"
      :required="required"
      :type="type"
      placeholder=" "
      class="peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-neutral-300 focus:border-black"
      :class="{ 'pl-9': formatPrice, 'pl-4': !formatPrice, 'border-rose-500 focus:border-rose-500': errors[id] }"
    />
    <label
      class="absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400"
      :class="{ 'left-9': formatPrice, 'text-rose-500': errors[id] }"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';

type InputProps = {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  errors: Record<string, string>,
  modelValue: string | number | null,
}
const { id, label, type, disabled, formatPrice, required, errors, modelValue } = withDefaults(defineProps<InputProps>(), {
  type: 'text'
});

const emit = defineEmits(['update:modelValue']);
</script>
