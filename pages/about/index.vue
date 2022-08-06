<template>
  <section>
    <AboutContent />
    <div>
      <h3>Resume</h3>
      <button>
        <span><DocumentDuplicateIcon /></span>
        Daniel-Josaphat-Lozada
      </button>
    </div>
    <div class="social">
      <h3>Social</h3>
      <button>
        LinkedIn
        <span><ExternalLinkIcon /></span>
      </button>
      <!-- <span>https://linkedin/en/daniel-josaphat-lozada</span> -->
      <button>
        Github
        <span><ExternalLinkIcon /></span>
      </button>
      <!-- <span>https://github.com/adazol123</span> -->
    </div>
    <AboutTechstack />
  </section>
</template>

<script setup>
import {
  DocumentDuplicateIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
} from "@heroicons/vue/outline";
definePageMeta({
  title: "Introduction/About",
});
</script>

<style scoped>
button {
  @apply flex gap-2 py-2 px-3 font-bold;
}
</style>
