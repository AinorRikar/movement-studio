<script setup lang="ts">
import { UiButton } from '~/shared/ui/button'

const { home, common } = useSiteContent()
</script>

<template>
  <section
    class="sticky top-0 z-0 col-full row-hero overflow-hidden bg-brand-black"
    aria-label="Hero"
  >
    <img
      :src="publicAsset('/images/hero.jpg')"
      :alt="home.hero.imageAlt"
      class="absolute inset-0 h-full w-full object-cover"
    >
    <div class="absolute inset-0 bg-brand-black/30" />

    <div class="site-grid relative z-10 min-h-[inherit]">
      <div
        class="col-full flex min-h-[inherit] flex-col items-start justify-between page-inset-x pb-12 pt-[calc(76px+2.5rem)] desktop:col-span-12 desktop:pb-16 desktop:pt-[calc(76px+3.5rem)]"
      >
        <h1 class="whitespace-nowrap text-display-sm text-brand-white">
          {{ home.hero.title }}
        </h1>
        <UiButton to="/classes">
          {{ common.bookNow }}
        </UiButton>
      </div>
    </div>
  </section>
</template>
