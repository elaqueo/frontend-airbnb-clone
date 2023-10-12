<template>
  <div
    @click="emit('click', label)"
    class="rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-black transition cursor-pointer"
    :class="{ 'border-black': selected, 'border-neutral-200': !selected }"
  >
    <Icon
      :icon="icon"
      font-size="30"
    />
    <div class="font-semibold">
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';

type CategoryInputProps = {
  selected: boolean;
  label: string;
  icon: string;
};

const { selected, label, icon } = defineProps<CategoryInputProps>();
const emit = defineEmits(['click']);
</script>
