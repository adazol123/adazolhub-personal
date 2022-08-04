<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const route = useRoute();

useHead({
  titleTemplate: () => {
    return route.meta.title
      ? `${route.meta.title} - Adazolhub | Personal`
      : "Adazolhub | Personal";
  },
});
</script>
