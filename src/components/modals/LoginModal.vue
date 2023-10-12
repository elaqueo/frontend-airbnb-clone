<template>
  <Modal :disabled="isLoading" :is-open="loginModal.isOpen" title="Login" action-label="Continue"
    @on-close="loginModal.close" @on-submit="onSubmit">
    <div class="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your account" />

      <AlertError v-if="error">
        {{ error }}
      </AlertError>

      <Input v-model="form.email" id="email" type="email" label="Email" :disabled="isLoading" :errors="errors" required
        autofocus />

      <Input v-model="form.password" id="password" type="password" label="Password" :disabled="isLoading" :errors="errors"
        required />
    </div>

    <template #footer>
      <div class="flex flex-col gap-4 mt-3">
        <hr />
        <Button outline label="Continue with Google" icon="flat-color-icons:google" />
        <Button outline label="Continue with Github" icon="mdi:github" />
        <div class="text-neutral-500 text-center mt-4 font-light">
          <div class="flex justify-center items-center gap-2">
            <div>Already have an account?</div>
            <div @click="loginModal.close" class="text-neutral-800 cursor-pointer hover:underline">Login</div>
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import axios from 'axios';

import { useLoginModal } from '../../stores/loginModal';
// import { useRegisterModal } from '../../stores/registerModal';
import Modal from './Modal.vue';
import Heading from '../Heading.vue';
import Input from '../Input.vue';
import Button from '../Button.vue';
import { reactive, ref } from 'vue';
import AlertError from '../alerts/AlertError.vue';
import { useAuthStore } from '../../stores/auth.store';

// const registerModal = useRegisterModal();
const loginModal = useLoginModal();
const isLoading = ref(false);

const form = reactive<Record<string, string>>({
  email: '',
  password: '',
});
const errors: Record<string, string> = {};

const error = ref<string | null>(null);

const authStore = useAuthStore();
const onSubmit = async () => {
  try {
    error.value = null;
    isLoading.value = true;

    const rLogin = await axios.post('http://localhost:3000/auth/login', form);

    axios.defaults.headers.common = { 'Authorization': `Bearer ${rLogin.data.token}` }
    const r = await axios.get('http://localhost:3000/auth/profile');
    authStore.setUser(r.data);

    loginModal.close();
  } catch (e) {
    console.error(e);
    error.value = 'Something went wrong';
  } finally {
    isLoading.value = false;
  }
}
</script>
