<script setup lang="ts">
import { ChevronLeft } from "lucide-vue-next";
import { ref } from "vue";
import { Button, type ButtonVariants } from "@components/ui/button";
import { cn } from "@/lib/utils";
import type { WithClassAsProps } from "./interface";
import { useCarousel } from "./useCarousel";

const props = withDefaults(
  defineProps<
    {
      variant?: ButtonVariants["variant"];
      size?: ButtonVariants["size"];
    } & WithClassAsProps
  >(),
  {
    variant: "outline",
    size: "icon",
  },
);

const { orientation, canScrollPrev, scrollPrev } = useCarousel();

const isHovered = ref(false);
</script>

<template>
  <Button
    data-slot="carousel-next"
    :disabled="!canScrollPrev"
    :class="
      cn(
        'absolute size-8 bg-transparent border-0 hover:bg-transparent hover:border-0 group',
        orientation === 'horizontal'
          ? 'top-1/2 -left-12 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        props.class,
      )
    "
    :variant="variant"
    :size="size"
    @click="scrollPrev"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <slot>
      <ChevronLeft
        :color="isHovered ? '#f8f9fa' : '#adb5bd'"
        :size="36"
        class="transition-colors duration-100"
      />
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>
