<template>
  <div
    @click="onClick"
    class="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:opacity-80 transition cursor-pointer border-transparent text-neutral-500"
    :class="{'border-b-neutral-800 text-neutral-800': selected}"
  >
    <Icon :icon="category.icon" font-size="26" />
    <div class="font-medium text-sm">
      {{ category.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { Category } from '../libs/models/categories';

type CategoryBoxProps = {
  category: Category,
  selected: boolean,
}
const { category, selected } = defineProps<CategoryBoxProps>();

const router = useRouter();
const route = useRoute();

const onClick = () => {
  const updatedQuery: any = {
    ...route.query,
    category: category.label
  }

  if (route.query?.category === category.label) {
    delete updatedQuery.category;
  }

  router.push({ path: '/', query: updatedQuery });
}
</script>
