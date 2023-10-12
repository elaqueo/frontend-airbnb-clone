<script setup lang="ts">
import LoginModal from './components/modals/LoginModal.vue';
import RegisterModal from './components/modals/RegisterModal.vue';
import RentModal from './components/modals/RentModal.vue';
import Navbar from './components/navbar/Navbar.vue';
import { useAuthStore } from './stores/auth.store';

const authStore = useAuthStore();
authStore.loadUser();
</script>

<template>
  <RegisterModal />
  <LoginModal />
  <RentModal />
  <Navbar />
  <router-view></router-view>
</template>
