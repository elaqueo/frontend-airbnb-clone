<template>
  <Container v-if="isMainPage">
    <div class="pt-4 flex flex-row items-center justify-between overflow-x-auto">
      <CategoryBox
        v-for="c in categories"
        :key="c.label"
        :category="c"
        :selected="category === c.label"
      />
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from './Container.vue';
import CategoryBox from './CategoryBox.vue';
import { categories } from '../libs/models/categories';
import { LocationQueryValue, useRoute } from 'vue-router';
import { ref, watchEffect } from 'vue';

const route = useRoute();
const category = ref<LocationQueryValue | LocationQueryValue[] | null>(null);

watchEffect(() => {
  const { category: c } = route.query;
  category.value = c;
})
const isMainPage = route.path === '/';
</script>
