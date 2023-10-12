<template>
  <div class="fixed w-full bg-white z-10 shadow-sm">
    <div class="py-4 border-b-[1px]">
      <Container>
        <div class="flex flex-row items-center justify-between gap-3 md:gap-0">
          <Logo />
          <Search />
          <UserMenu />
        </div>
      </Container>
    </div>
    <Categories />
  </div>
</template>

<script setup lang="ts">
import Container from '../Container.vue';
import Categories from '../Categories.vue';
import Logo from './Logo.vue';
import Search from './Search.vue';
import UserMenu from './UserMenu.vue';
</script>
