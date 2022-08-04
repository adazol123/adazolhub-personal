<template>
  <footer>
    <div>
      <div>
        <email_label>Contact us —</email_label>
        <email>dpadayao40@outlook.ph</email>
      </div>
      <ul class="links">
        <li v-for="link in links" :key="link.label">
          <NuxtLink :to="link.url">{{ link.label }}</NuxtLink>
        </li>
      </ul>
    </div>
    <span class="copyright">© Copyright 2022 | adazolhub.com</span>
  </footer>
</template>

<script setup>
let links = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/daniel-josaphat-lozada",
    logo: "linkedin logo",
  },
  {
    label: "Github",
    url: "https://github.com/adazol123",
    logo: "github logo",
  },
  {
    label: "Behance",
    url: "https://behance.com/adazolhub",
    logo: "behance logo",
  },
  {
    label: "Twitter",
    url: "https://linkedin.com/daniel-josaphat-lozada",
    logo: "twitter logo",
  },
];
</script>
