<template>
  <Alert class="bg-red-500 text-white" icon="ri:alert-fill">
      <slot></slot>
  </Alert>
</template>

<script lang="ts" setup>
import Alert from './Alert.vue';

</script>