<template>
  <h3>Technology stack</h3>
  <div class="tech-stack-wrapper">
    <div class="tech-stack">
      <img
        v-for="tech in techStack"
        :src="`/_nuxt/assets/techstack/logo-${tech}.png`"
        alt=""
      />
    </div>
  </div>
  <div class="tech-stack-wrapper">
    <div class="tech-stack">
      <img
        v-for="tech in techStack"
        :src="`/_nuxt/assets/techstack/logo-${tech}.png`"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
let techStack = [
  "figma",
  "css",
  "cloudflare",
  "github",
  "googlecloud",
  "sass",
  "vercel",
  "react",
  "next",
  "node",
  "mongodb",
  "js",
  "GCP",
  "framer",
  "firebase",
  "photoshop-2",
];
</script>
