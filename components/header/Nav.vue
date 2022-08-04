<template>
  <header>
    <nav>
      <NuxtLink to="/">
        <logo> Adazolhub | <span>Personal</span> </logo>
      </NuxtLink>
      <button class="btn-rounded" @click="() => (toggleMenu = !toggleMenu)">
        <span>
          <DotsHorizontalIcon />
        </span>
      </button>
      <UiButtonDropdown v-if="toggleMenu" :toggle="toggleMenu" />
      <div
        v-if="toggleMenu"
        class="fixed z-0 inset-0 w-full h-screen bg-transparent"
        @click="() => (toggleMenu = !toggleMenu)"
      />
    </nav>
  </header>
</template>
<script setup>
import { DotsHorizontalIcon } from "@heroicons/vue/outline";

const toggleMenu = ref(false);

console.log(toggleMenu);
</script>
