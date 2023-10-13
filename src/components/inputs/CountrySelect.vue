<template>
  <div>
    <select
      :v-model="value?.value"
      @input="onCountrySelected"
      class="p-3 border-2 text-lg border-r rounded-md w-full"
    >
      <option
        v-for="country in getAll()"
        :key="country.value"
        :value="country.value"
      >
        <div class="flex items-center gap-3">
          <div>{{ country.flag }}</div>
          <div>
            {{ country.label }}
            <span class="text-neutral-500 ml-1">{{ country.region }}</span>
          </div>
        </div>
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { Country, useCountries } from '../../libs/models/countries';

type CountrySelectProps = {
  value?: Country | null;
};

const { value } = defineProps<CountrySelectProps>();
const emit = defineEmits<{
  (e: 'change', value?: Country | null): void;
}>();

const { getAll } = useCountries();

const onCountrySelected = (evt: any) => {
  const country = getAll().find((c) => c.value === evt.target.value);
  emit('change', country);
};
</script>
