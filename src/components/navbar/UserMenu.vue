<template>
  <div class="relative">
    <div class="flex items-center gap-3">
      <div
        class="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
        Airbnb your home
      </div>
      <div @click="toggleOpen"
        class="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
        <Icon icon="eva:menu-outline" />
        <div class="hidden md:block">
          <Avatar />
        </div>
      </div>
    </div>

    <div v-if="isOpen"
      class="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
      <div class="flex flex-col cursor-pointer">
        <template v-if="authStore.isLogged">
          <MenuItem @click="() => {}" label="My trips"></MenuItem>
          <MenuItem @click="() => {}" label="My favorites"></MenuItem>
          <MenuItem @click="() => {}" label="My reservations"></MenuItem>
          <MenuItem @click="() => {}" label="My properties"></MenuItem>
          <MenuItem @click="() => {}" label="Airbnb my home"></MenuItem>
          <hr />
          <MenuItem @click="authStore.logout" label="Logout"></MenuItem>
        </template>
        <template v-else>
          <MenuItem @click="loginModal.open" label="Login"></MenuItem>
          <MenuItem @click="registerModal.open" label="Signup"></MenuItem>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

import MenuItem from './MenuItem.vue';
import Avatar from '../Avatar.vue';

import { useLoginModal } from '../../stores/loginModal';
import { useRegisterModal } from '../../stores/registerModal';
import { useAuthStore } from '../../stores/auth.store';

const isOpen = ref(false);
const toggleOpen = () => { isOpen.value = !isOpen.value };

const registerModal = useRegisterModal();
const loginModal = useLoginModal();

const authStore = useAuthStore();

</script>
