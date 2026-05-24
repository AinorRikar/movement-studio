<script setup lang="ts">
import { UiButton } from '~/shared/ui/button'
import { UiDivider } from '~/shared/ui/divider'
import { CallToAction } from '~/widgets/cta-banner'
import { FoundersSection } from '~/widgets/founders-section'
import { HeroSection } from '~/widgets/hero'
import { ModuleSplit } from '~/widgets/module-split'
import { PromoBar } from '~/widgets/promo-bar'

const { home, common } = useSiteContent()

usePageSeo('home')
</script>

<template>
  <div>
    <HeroSection />

    <div class="relative z-10">
      <PromoBar />
      <ModuleSplit
        :title="home.vision.title"
        image="/images/vision.jpg"
        :image-alt="home.vision.imageAlt"
      >
        <p class="text-label text-brand-black">
          {{ home.vision.label }}
        </p>
        <p class="text-body stack-4 text-brand-black">
          {{ home.vision.body }}
        </p>
        <UiButton class="stack-8" variant="dark" narrow>
          {{ common.bookNow }}
        </UiButton>
      </ModuleSplit>
      <UiDivider />
      <ModuleSplit
        :title="home.classesPreview.title"
        image="/images/classes.jpg"
        :image-alt="home.classesPreview.imageAlt"
      >
        <p class="text-label text-brand-black">
          {{ home.classesPreview.label }}
        </p>
        <p class="text-body stack-4 text-brand-black">
          {{ home.classesPreview.body }}
        </p>
        <UiButton class="stack-8" variant="dark" to="/classes">
          {{ common.bookNow }}
        </UiButton>
      </ModuleSplit>
      <UiDivider />
      <FoundersSection />
      <CallToAction />
    </div>
  </div>
</template>
