<script setup lang="ts">
import gridGeneration from "../../images/gifs/grid-generation.gif";
import PitchSlide from "./PitchSlide.vue";

const sections = [
  {
    text: "Génération procédurale",
    image: gridGeneration,
  },
];
</script>

<template>
  <section
    class="w-full h-3/5 md:h-full flex flex-col md:flex-row justify-center items-center gap-4 bg-[#fffaf4]"
  >
    <PitchSlide :sections="sections" />
  </section>
</template>
