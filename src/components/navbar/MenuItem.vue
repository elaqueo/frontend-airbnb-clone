<template>
  <div
    class="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
    @onclick="emit('onclick')"
  >
    {{ label }}
  </div>
</template>

<script setup lang="ts">
const { label } = defineProps({ label: String });
const emit = defineEmits(['onclick']);
</script>
