<script setup lang="ts">
import { ClassBookingGrid } from '~/widgets/classes-booking'
import { PageHeader } from '~/widgets/page-header'
import { PromiseSection } from '~/widgets/promise-section'

const { classes } = useSiteContent()

usePageSeo('classes')
</script>

<template>
  <div class="bg-brand-black">
    <PageHeader
      image="/images/classes-hero.jpg"
      :title="classes.pageTitle"
      :image-alt="classes.heroImageAlt"
    />
    <ClassBookingGrid />
    <PromiseSection />
  </div>
</template>
