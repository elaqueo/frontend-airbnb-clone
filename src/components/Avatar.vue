<template>
  <img
    :src="authStore.image"
    alt="Avatar"
    class="rounded-full"
    width="30"
    fit="contain"
  />
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth.store';

const authStore = useAuthStore();

</script>
