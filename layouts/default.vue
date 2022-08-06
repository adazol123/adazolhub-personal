<template>
  <HeaderNav />
  <main>
    <slot />
  </main>
  <FooterSection v-if="(route.name === 'index') | (route.name === 'home')" />
  <FooterCopyright v-else />
</template>
<script setup>
const route = useRoute();
</script>
