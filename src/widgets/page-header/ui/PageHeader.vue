<script setup lang="ts">
defineProps<{
  image: string
  title: string
  imageAlt?: string
}>()
</script>

<template>
  <section class="relative row-hero w-full overflow-hidden bg-brand-black">
    <img
      :src="publicAsset(image)"
      :alt="imageAlt || title"
      class="absolute inset-0 h-full w-full object-cover"
    >
    <div class="absolute inset-0 bg-brand-black/35" />
    <div class="site-grid relative z-10 min-h-[inherit]">
      <div class="col-full flex min-h-[inherit] flex-col justify-start page-inset-x pt-[calc(76px+2rem)] desktop:pt-[calc(76px+3.5rem)]">
        <h1 class="text-display-sm max-w-[700px] text-brand-white">
          {{ title }}
        </h1>
      </div>
    </div>
  </section>
</template>
