<template>
  <div
    v-if="viewAlert"
    class="flex items-center relative font-regular relative block w-full rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-90">
    <Icon v-if="icon" :icon="icon" size="32" class="mr-2" />

    <slot></slot>

    <ButtonClose class="absolute right-6" @click="handleClose" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue/dist/iconify.js';
import ButtonClose from '../buttons/ButtonClose.vue';

type AlertProps = {
  icon?: string;
}
const { icon } = defineProps<AlertProps>();

const viewAlert = ref(true);
const handleClose = () => {
  viewAlert.value = false;
}
</script>