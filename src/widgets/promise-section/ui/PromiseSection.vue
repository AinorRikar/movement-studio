<script setup lang="ts">
const { classes } = useSiteContent()
const { promise } = classes
</script>

<template>
  <section class="site-grid section-rule-top row-promise bg-brand-black">
    <div class="col-third sidebar-col bg-brand-black">
      <h2 class="text-title max-w-[366px] text-brand-white">
        {{ promise.title }}
      </h2>
    </div>

    <div class="col-two-thirds flex flex-col">
      <div class="flex min-h-[200px] items-center bg-brand-blue content-inset-x">
        <p class="max-w-[950px] text-cta text-brand-white">
          {{ promise.body }}
        </p>
      </div>
      <div class="relative min-h-[280px] overflow-hidden desktop:min-h-[440px]">
        <img
          :src="publicAsset('/images/promise.jpg')"
          :alt="promise.imageAlt"
          class="absolute inset-0 h-full w-full object-cover"
        >
      </div>
    </div>
  </section>
</template>
