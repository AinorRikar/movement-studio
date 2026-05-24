<script setup lang="ts">
import { SiteLogoWordmark } from '~/shared/ui/site-logo'

const { nav, meta } = useSiteContent()
const route = useRoute()
const mobileOpen = ref(false)

const isActive = (path: string) => route.path === path

const navCell =
  'transition-figma flex h-full shrink-0 items-center justify-center whitespace-nowrap border-r border-brand-white/40 px-6 text-nav text-brand-white'

const navLinkClass = (path: string) => [
  navCell,
  isActive(path) ? 'opacity-100' : 'opacity-60',
  'hover:bg-brand-blue hover:opacity-100',
]
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-brand-white/40 bg-brand-black">
    <div class="site-grid row-nav items-stretch">
      <nav class="col-full hidden h-[76px] items-stretch desktop:col-span-6 desktop:flex">
        <NuxtLink
          v-for="link in nav.links"
          :key="link.to"
          :to="link.to"
          :class="[
            navLinkClass(link.to),
            link.to === '/classes' ? 'rounded-tl-[20px]' : '',
          ]"
        >
          {{ link.label }}
        </NuxtLink>
        <span
          :class="[navCell, 'cursor-default opacity-60 hover:opacity-40']"
          :aria-label="nav.addressAria"
        >
          {{ nav.address }}
        </span>
      </nav>

      <div class="col-full flex h-[76px] items-center justify-between px-4 desktop:col-span-6 desktop:justify-end desktop:px-8">
        <button
          type="button"
          class="flex h-10 w-10 flex-col items-center justify-center gap-1.5 desktop:hidden"
          :aria-label="nav.menuAria"
          @click="mobileOpen = !mobileOpen"
        >
          <span class="h-0.5 w-6 bg-brand-white" />
          <span class="h-0.5 w-6 bg-brand-white" />
          <span class="h-0.5 w-6 bg-brand-white" />
        </button>

        <NuxtLink
          to="/"
          class="transition-figma text-site-logo text-brand-white hover:opacity-80 desktop:ml-auto"
          :aria-label="meta.siteName"
          @click="mobileOpen = false"
        >
          <SiteLogoWordmark />
        </NuxtLink>
      </div>
    </div>

    <div
      v-if="mobileOpen"
      class="border-t border-brand-white/20 bg-brand-black desktop:hidden"
    >
      <nav class="flex flex-col">
        <NuxtLink
          v-for="link in nav.links"
          :key="link.to"
          :to="link.to"
          class="transition-figma border-b border-brand-white/20 px-6 py-4 text-nav text-brand-white opacity-60 hover:bg-brand-blue hover:opacity-100"
          :class="isActive(link.to) ? 'opacity-100' : ''"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
        <span class="transition-figma border-b border-brand-white/20 px-6 py-4 text-nav text-brand-white opacity-60 hover:opacity-40">
          {{ nav.address }}
        </span>
      </nav>
    </div>
  </header>
</template>
