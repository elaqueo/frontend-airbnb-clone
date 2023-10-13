<template>
  <Modal
    :disabled="isLoading"
    :is-open="rentModal.isOpen"
    title="Airbnb your home!"
    :action-label="actionLabel"
    :secondary-action-label="secondaryActionLabel"
    @on-secondary-action="backStep"
    @on-close="rentModal.close"
    @on-submit="nextStep"
  >
    <div class="flex flex-col gap-8">
      <template v-if="step === STEPS.CATEGORY">
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
      </template>
      <template v-else-if="step === STEPS.LOCATION">
        <Heading
          title="Where is your place located?"
          subtitle="Help guests find you!"
        />
        <CountrySelect
          @change="(value) => (form.location = value ?? null)"
          :value="form.location"
        />
        <Map />
      </template>
      <template v-else-if="step === STEPS.INFO">
        <Heading
          title="Share some basics about your place"
          subtitle="What amenities do you have?"
        />
        <Counter
          title="Guests"
          subtitle="How many guests do you allow?"
          v-model:value="form.guestCount"
        />
        <hr />
        <Counter
          title="Rooms"
          subtitle="How many rooms do you have?"
          v-model:value="form.roomCount"
        />
        <hr />
        <Counter
          title="Bathrooms"
          subtitle="How many bathrooms do you have?"
          v-model:value="form.bathroomCount"
        />
      </template>
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
import CountrySelect from '../inputs/CountrySelect.vue';
import Map from '../Map.vue';
import { listingMakeDefault } from '../../libs/dtos/listings.dto';
import Counter from '../inputs/Counter.vue';

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
</script>
