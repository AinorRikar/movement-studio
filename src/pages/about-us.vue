<script setup lang="ts">
import { CallToAction } from '~/widgets/cta-banner'
import { FoundersSection } from '~/widgets/founders-section'
import { InstructorsGrid } from '~/widgets/instructors-grid'
import { PageHeader } from '~/widgets/page-header'
import { PromoBar } from '~/widgets/promo-bar'
import { OurSpaceSection } from '~/widgets/our-space'

const { about } = useSiteContent()

usePageSeo('about')
</script>

<template>
  <div class="bg-brand-white">
    <PageHeader
      image="/images/about-hero.jpg"
      :title="about.pageTitle"
      :image-alt="about.heroImageAlt"
    />
    <PromoBar />
    <FoundersSection variant="about" />
    <InstructorsGrid />
    <OurSpaceSection />
    <CallToAction />
  </div>
</template>
