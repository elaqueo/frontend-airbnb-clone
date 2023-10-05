<template>
  <div
    v-if="isOpen"
    class="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70"
  >
    <div class="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
      <div
        class="translate duration-300 h-full transition"
        :class="isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'"
      >
        <div
          class="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <div class="flex items-center justify-center p-6 rounded-t relative border-b-[1px]">
            <button
              @click="handleClose"
              class="p-1 border-0 hover:opacity-70 transition absolute left-9"
            >
              <Icon
                icon="ion:close"
                size="18"
              />
            </button>

            <div class="text-lg font-semibold">
              {{ title }}
            </div>
          </div>

          <div class="relative p-6 flex-auto">
            <slot></slot>
          </div>

          <div class="flex flex-col gap-2 p-6">
            <div class="flex items-center gap-4 w-full">
              <Button
                v-if="secondaryActionLabel"
                outline
                :disabled="disabled"
                :label="secondaryActionLabel"
                @on-click="emit('onSecondaryAction')"
              />
              <Button
                :disabled="disabled"
                :label="actionLabel"
                @on-click="emit('onSubmit')"
              />
            </div>
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import Button from '../Button.vue';

export type ModalProps = {
  isOpen?: boolean;
  title?: string;
  actionLabel: string;
  secondaryActionLabel?: string;
  disabled?: boolean;
}
const { isOpen, title, actionLabel, secondaryActionLabel, disabled } = defineProps<ModalProps>()

const emit = defineEmits(['onClose', 'onSubmit', 'onSecondaryAction', 'update:isOpen'])

const handleClose = () => {
  if (!!disabled) return;

  // emit('update:isOpen', false);
  setTimeout(() => {
    emit('onClose')
  }, 300);
}
</script>
