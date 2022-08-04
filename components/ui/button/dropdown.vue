<template>
  <div class="dropdown">
    <div v-if="route.path !== '/'">
      <ul>
        <li v-for="list in lists" :key="list.label">
          <NuxtLink :to="list.link">
            <span>{{ list.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <button>Toggle dark mode</button>
  </div>
</template>

<script setup>
let route = useRoute();

let lists = [
  {
    label: "Introduction",
    link: "/about",
  },
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "Case Studies",
    link: "/case-studies",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];
</script>

<style scoped>
button {
  @apply py-2;
}
</style>
