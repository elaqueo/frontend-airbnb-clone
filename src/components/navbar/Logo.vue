<template>
  <img
    @click="() => router.push('/')"
    src="/img/logo.png"
    alt="logo"
    class="hidden md:block cursor-pointer"
    width="100"
    fit="contain"
  />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
