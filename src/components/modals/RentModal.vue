<template>
  <Modal
    :disabled="isLoading"
    :is-open="rentModal.isOpen"
    title="Airbnb your home!"
    :action-label="actionLabel"
    :secondary-action-label="secondaryActionLabel"
    @on-secondary-action="step === STEPS.CATEGORY ? undefined : backStep"
    @on-close="rentModal.close"
    @on-submit="onSubmit"
  >
    <div
      v-if="step === STEPS.CATEGORY"
      class="flex flex-col gap-8"
    >
      <Heading
        title="Which of these best describes your place?"
        subtitle="Pick a category"
      />
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto"
      >
        <div
          v-for="c in categories"
          :key="c.label"
          class="col-span-1"
        >
          <CategoryInput
            @click="setCategory"
            :selected="isSelected(c.label)"
            :label="c.label"
            :icon="c.icon"
          />
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

import { useRentModal } from '../../stores/rentModal';
import { categories } from '../../libs/models/categories';
import Modal from './Modal.vue';
import Heading from '../Heading.vue';
import CategoryInput from '../inputs/CategoryInput.vue';
import { listingMakeDefault } from '../../libs/dtos/listings.dto';

enum STEPS {
  CATEGORY,
  LOCATION,
  INFO,
  IMAGES,
  DESCRIPTION,
  PRICE,
}

const step = ref(STEPS.CATEGORY);
const backStep = () => {
  step.value--;
};
const nextStep = () => {
  step.value++;
};

const actionLabel = computed(() =>
  step.value === STEPS.PRICE ? 'Create' : 'Next',
);
const secondaryActionLabel = computed(() =>
  step.value === STEPS.CATEGORY ? undefined : 'Back',
);

const rentModal = useRentModal();
const isLoading = ref(false);

const form = reactive(listingMakeDefault());
const setCategory = (category: string) => {
  form.category = category;
};

const isSelected = (label: string) => form.category === label;

const onSubmit = async () => {
  rentModal.close();
};
</script>
