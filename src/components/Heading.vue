<template>
  <div :class="{ 'text-center': center, 'text-start': !center }">
    <div class="text-2xl font-bold">
      {{ title }}
    </div>
    <div
      v-if="subtitle"
      class="font-ligth text-neutral-500 mt-2"
    >
      {{ subtitle }}
    </div>
  </div>
</template>

<script setup lang="ts">
type HeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const { title, subtitle, center } = defineProps<HeadingProps>();
</script>
