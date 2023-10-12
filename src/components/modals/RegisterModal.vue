<template>
  <Modal
    :disabled="isLoading"
    :is-open="registerModal.isOpen"
    title="Register"
    action-label="Continue"
    @on-close="registerModal.close"
    @on-submit="onSubmit"
  >
    <div class="flex flex-col gap-4">
      <Heading
        title="Welcome to Airbnb"
        subtitle="Create an account"
      />

      <AlertError v-if="error">
        {{ error }}
      </AlertError>

      <Input
        v-model="form.email"
        id="email"
        type="email"
        label="Email"
        :disabled="isLoading"
        :errors="errors"
        required
        autofocus
      />

      <Input
        v-model="form.name"
        id="name"
        label="Name"
        :disabled="isLoading"
        :errors="errors"
        required
      />

      <Input
        v-model="form.password"
        id="password"
        type="password"
        label="Password"
        :disabled="isLoading"
        :errors="errors"
        required
      />
    </div>

    <template #footer>
      <div class="flex flex-col gap-4 mt-3">
        <hr />
        <Button
          outline
          label="Continue with Google"
          icon="flat-color-icons:google"
        />
        <Button
          outline
          label="Continue with Github"
          icon="mdi:github"
        />
        <div class="text-neutral-500 text-center mt-4 font-light">
          <div class="flex justify-center items-center gap-2">
            <div>Already have an account?</div>
            <div
              @click="toggle"
              class="text-neutral-800 cursor-pointer hover:underline"
            >Login</div>
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

import { AirBnb } from '../../libs/api/AirBnb';
import { RegisterDto } from '../../libs/dtos/authDto';
import { useRegisterModal } from '../../stores/registerModal';
import { useLoginModal } from '../../stores/loginModal';
import Modal from './Modal.vue';
import Heading from '../Heading.vue';
import Input from '../Input.vue';
import Button from '../Button.vue';
import AlertError from '../alerts/AlertError.vue';

const registerModal = useRegisterModal();
const loginModal = useLoginModal();

const isLoading = ref(false);

const form = reactive<RegisterDto>({
  name: '',
  email: '',
  password: '',
});
const errors: Record<string, string> = {};

const error = ref<string | null>(null);

const onSubmit = async () => {
  try {
    error.value = null;
    isLoading.value = true;

    await AirBnb.auth.register(form);

    registerModal.close();
  } catch (e) {
    console.error(e);
    error.value = 'Something went wrong';
  } finally {
    isLoading.value = false;
  }
}

const toggle = () => {
  registerModal.close();
  loginModal.open();
}
</script>
