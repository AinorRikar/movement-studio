<script setup lang="ts">
import { SiteFooter, SiteHeader } from '~/widgets/layout'
</script>

<template>
  <div class="min-h-screen bg-brand-white">
    <SiteHeader />
    <main>
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
