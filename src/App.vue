<script setup lang="ts">
import LoginModal from './components/modals/LoginModal.vue';
import RegisterModal from './components/modals/RegisterModal.vue';
import Navbar from './components/navbar/Navbar.vue';

</script>

<template>
  <RegisterModal />
  <LoginModal />
  <Navbar />
  <router-view></router-view>
</template>
