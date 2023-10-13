<template>
  <div class="flex items-center justify-between">
    <div class="flex flex-col">
      <div class="font-medium">{{ title }}</div>
      <div class="font-light text-gray-600">{{ subtitle }}</div>
    </div>
    <div class="flex items-center gap-4 select-none">
      <div
        @click="onReduce"
        class="w-10 h-10 rounded-full border-[1px] flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition"
      >
        <Icon icon="akar-icons:minus" />
      </div>
      <div class="font-light text-xl text-neutral-600">{{ value }}</div>
      <div
        @click="onAdd"
        class="w-10 h-10 rounded-full border-[1px] flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition"
      >
        <Icon icon="akar-icons:plus" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import { toRefs } from 'vue';

type CounterProps = {
  title: string;
  subtitle: string;
  value: number;
};
const props = defineProps<CounterProps>();
const { value } = toRefs(props);
const emits = defineEmits(['update:value']);

const onAdd = () => {
  emits('update:value', value.value + 1);
};

const onReduce = () => {
  if (value.value === 1) return;
  emits('update:value', value.value - 1);
};
</script>
