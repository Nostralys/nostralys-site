<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { MediaData } from "@/types";

const medias: MediaData[] = [
  {
    src: "https://www.youtube.com/watch?v=rbL-7SKeB6E&t=51s",
    alt: "Trailer",
    type: "video",
  },
  {
    src: "images/backgrounds/yggdrasil-underground.jpg",
    alt: "Yggdrasil Underground",
    type: "image",
  },
  {
    src: "images/backgrounds/yggdrasil-underground.jpg",
    alt: "Yggdrasil Underground",
    type: "image",
  },
  // Add more media items as needed
];
</script>

<template>
  <Carousel
    class="w-2/3 h-2/3"
    :opts="{
      loop: true,
    }"
  >
    <CarouselContent>
      <CarouselItem v-for="(media, index) in medias" :key="index">
        <iframe
          v-if="media.type === 'video'"
          :width="'100%'"
          :height="'100%'"
          :src="media.src.replace('watch?v=', 'embed/').replace(/&t=.*$/, '')"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          class="rounded-xl"
        ></iframe>
        <img v-else :src="media.src" :alt="media.alt" class="rounded-xl" />
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>
