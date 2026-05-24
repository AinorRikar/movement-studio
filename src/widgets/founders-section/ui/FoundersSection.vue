<script setup lang="ts">
defineProps<{
  variant?: 'home' | 'about'
}>()

const { home, about } = useSiteContent()

const foundersHome = computed(() => home.founders)
const foundersAbout = computed(() => about.founders)
</script>

<template>
  <section
    v-if="variant !== 'about'"
    class="site-grid row-founders bg-brand-white"
  >
    <div class="col-half flex flex-col justify-center px-6 py-12 desktop:min-h-[528px] desktop:px-[max(1.5rem,calc((100%-420px)/2))] desktop:py-0">
      <div class="content-block">
        <h2 class="text-title text-brand-black">
          {{ foundersHome.title }}
        </h2>
        <blockquote class="text-quote stack-10 text-brand-black">
          «{{ foundersHome.quote }}»
        </blockquote>
        <p class="text-body stack-4 text-brand-black">
          {{ foundersHome.quoteAuthor }}
        </p>
      </div>
    </div>

    <div class="col-half grid grid-rows-2">
      <article class="grid min-h-[400px] grid-rows-[307px_93px]">
        <div class="relative overflow-hidden">
          <img
            :src="publicAsset('/images/founder-1.jpg')"
            :alt="foundersHome.sophia.name"
            class="h-full w-full object-cover"
          >
        </div>
        <div class="flex items-center bg-brand-magenta px-8">
          <div>
            <p class="text-person-name text-brand-white">
              {{ foundersHome.sophia.name }}
            </p>
            <p class="text-body mt-1 text-brand-white">
              {{ foundersHome.sophia.role }}
            </p>
          </div>
        </div>
      </article>
      <article class="grid min-h-[400px] grid-rows-[307px_93px]">
        <div class="relative overflow-hidden">
          <img
            :src="publicAsset('/images/founder-2.jpg')"
            :alt="foundersHome.alisa.name"
            class="h-full w-full object-cover"
          >
        </div>
        <div class="flex items-center bg-brand-cyan px-8">
          <div>
            <p class="text-person-name text-brand-black">
              {{ foundersHome.alisa.name }}
            </p>
            <p class="text-body mt-1 text-brand-black">
              {{ foundersHome.alisa.role }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section
    v-else
    class="site-grid row-founders-compact bg-brand-black"
  >
    <div class="col-third sidebar-col flex items-start bg-brand-black">
      <h2 class="text-title text-brand-white">
        {{ foundersAbout.title }}
      </h2>
    </div>
    <div class="col-two-thirds grid grid-cols-1 tablet:grid-cols-2">
      <article class="flex min-h-[320px] flex-col overflow-hidden tablet:min-h-[497px]">
        <div class="relative min-h-0 flex-1 overflow-hidden">
          <img
            :src="publicAsset('/images/founder-1.jpg')"
            :alt="foundersAbout.sophia.name"
            class="absolute inset-0 h-full w-full object-cover"
          >
        </div>
        <div class="flex shrink-0 items-center bg-brand-magenta px-8 py-6">
          <div>
            <p class="text-person-name text-brand-black">
              {{ foundersAbout.sophia.name }}
            </p>
            <p class="text-body mt-1 text-brand-black">
              {{ foundersAbout.sophia.role }}
            </p>
          </div>
        </div>
      </article>
      <article class="flex min-h-[320px] flex-col overflow-hidden tablet:min-h-[497px]">
        <div class="relative min-h-0 flex-1 overflow-hidden">
          <img
            :src="publicAsset('/images/about-founder-2.jpg')"
            :alt="foundersAbout.alisa.name"
            class="absolute inset-0 h-full w-full object-cover"
          >
        </div>
        <div class="flex shrink-0 items-center bg-brand-cyan px-8 py-6">
          <div>
            <p class="text-person-name text-brand-black">
              {{ foundersAbout.alisa.name }}
            </p>
            <p class="text-body mt-1 text-brand-black">
              {{ foundersAbout.alisa.role }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
