<script setup lang="ts">
defineProps<{
  title: string
  image: string
  imageAlt?: string
}>()
</script>

<template>
  <section class="site-grid row-module">
    <div class="col-half relative overflow-hidden">
      <img
        :src="publicAsset(image)"
        :alt="imageAlt || title"
        class="absolute inset-0 h-full w-full object-cover"
      >
      <div class="absolute inset-0 bg-brand-black/20" />
      <div class="relative flex h-full min-h-[inherit] flex-col justify-end content-inset-x py-8 desktop:py-12">
        <h2 class="text-display-sm text-brand-white">
          {{ title }}
        </h2>
      </div>
    </div>

    <div class="col-half panel-content row-module">
      <div class="content-block">
        <slot />
      </div>
    </div>
  </section>
</template>
