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
        class="fixed inset-0 w-full h-screen"
        @click="() => (toggleMenu = !toggleMenu)"
      />
    </nav>
  </header>
</template>
<script setup>
import { DotsHorizontalIcon } from "@heroicons/vue/outline";

const toggleMenu = ref(false);
</script>
