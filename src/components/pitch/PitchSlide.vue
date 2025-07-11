<script setup lang="ts">
import { computed, ref } from 'vue';

const { sections } = defineProps<{
	sections: {
		text: string;
		image: ImageMetadata;
	}[];
}>();

// Start the carousel with the first image
const currentIndex = ref(0)

const currentSection = computed(() => {
	return sections[currentIndex.value];
});

const currentImage = computed(() => {
	return currentSection.value.image;
});

const setCurrentIndex = (index: number) => {
	if (index < 0 || index >= sections.length) {
		throw new Error('Index out of bounds');
	};

	currentIndex.value = index;
}

const isActive = (index: number) => currentIndex.value === index
</script>

<template>
	<!-- Images -->
	<img class="w-full h-full object-cover " :src="currentImage.src" />

	<div class="md:w-2/4 h-full flex flex-col gap-2 justify-center items-center">
		<!-- Text -->
		<p class="h-2/5 text-2xl md:text-3xl font-bold text-center align-bottom px-2 inline-block">
			{{ currentSection.text }}
		</p>

		<!-- Navigation Dots -->
		<div class="flex gap-2 md:mb-6">
			<button :class="{
				'w-10 h-4 border-2 hover:cursor-pointer transition duration-200 ease-linear': true,
				'bg-[#524e47] border-[#524e47]': isActive(index),
				'bg-none border-black hover:border-[#524e47]': !isActive(index)
			}" v-for="(_, index) in sections" :index="index" @click="setCurrentIndex(index)" />
		</div>
	</div>
</template>
