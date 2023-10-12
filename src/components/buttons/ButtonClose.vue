<template>
    <button
      @click="$emit('click')"
      class="p-1 border-0 hover:opacity-70 transition"
    >
      <Icon
        icon="ion:close"
        size="18"
      />
    </button>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';

</script>
