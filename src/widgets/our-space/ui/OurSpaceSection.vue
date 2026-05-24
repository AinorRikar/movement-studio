<script setup lang="ts">
const { about } = useSiteContent()
</script>

<template>
  <section class="site-grid row-space bg-brand-black">
    <div class="col-two-thirds relative min-h-[inherit] overflow-hidden">
      <img
        :src="publicAsset('/images/space.jpg')"
        :alt="about.space.imageAlt"
        class="absolute inset-0 h-full w-full object-cover"
      >
    </div>

    <div class="col-third flex flex-col justify-center bg-brand-black px-6 py-12 desktop:px-12 desktop:py-16">
      <div class="content-block max-w-[271px]">
        <h2 class="text-title text-brand-white">
          {{ about.space.title }}
        </h2>
        <p class="text-body stack-6 text-brand-white">
          {{ about.space.body }}
        </p>
      </div>
    </div>
  </section>
</template>
