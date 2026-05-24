<script setup lang="ts">
import { UiButton } from '~/shared/ui/button'

const { classes, common } = useSiteContent()
const { booking } = classes
</script>

<template>
  <section class="site-grid bg-brand-black">
    <div class="col-third sidebar-col bg-brand-black">
      <h2 class="text-title max-w-[366px] text-brand-white">
        {{ booking.title }}
      </h2>
    </div>

    <div class="col-two-thirds grid-cards-2">
      <article
        v-for="card in booking.cards"
        :key="card.code"
        class="row-card flex min-h-[480px] flex-col overflow-hidden"
      >
        <div class="relative h-[331px] shrink-0 overflow-hidden">
          <img
            :src="publicAsset(card.image)"
            :alt="card.title"
            class="h-full w-full object-cover"
          >
        </div>
        <div class="flex min-h-[149px] flex-1 flex-col justify-between bg-brand-black p-6">
          <span class="text-card-code text-brand-white/90">
            {{ card.code }}
          </span>
          <div>
            <h3 class="text-card-title text-brand-white">
              {{ card.title }}
            </h3>
            <p class="text-body mt-2 line-clamp-2 text-brand-white/90">
              {{ card.description }}
            </p>
            <p class="text-body mt-2 text-brand-white">
              {{ card.schedule }}
            </p>
            <UiButton class="mt-4" variant="light">
              {{ common.bookNow }}
            </UiButton>
          </div>
        </div>
      </article>

      <article
        class="tablet:col-span-2 relative row-card min-h-[480px] overflow-hidden"
      >
        <img
          :src="publicAsset('/images/booking-row.jpg')"
          alt=""
          class="absolute inset-0 h-full w-full object-cover"
        >
        <div class="absolute inset-0 bg-brand-black/40" />
        <div class="relative z-10 flex h-full min-h-[480px] flex-col justify-between p-8">
          <p class="text-card-code text-brand-white">
            {{ booking.rowLabel }}
          </p>
          <div class="max-w-[640px]">
            <p class="text-body text-brand-white">
              {{ booking.rowBody }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
