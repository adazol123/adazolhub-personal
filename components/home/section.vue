<template>
  <section id="__home">
    <ul class="menu">
      <li class="group py-2" v-for="list in lists" :key="list.label">
        <NuxtLink :to="list.link" class="relative py-2">
          <span class="block">{{ list.label }}</span>
          <span
            class="bg-gray-800 h-[2px] lg:right-0 block w-0 group-hover:w-24 transition-all duration-500 absolute"
          ></span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
definePageMeta({
  title: "Home",
});

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
