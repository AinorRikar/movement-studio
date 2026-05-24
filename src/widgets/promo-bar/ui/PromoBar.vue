<script setup lang="ts">
const { promo } = useSiteContent()
</script>

<template>
  <div class="site-grid row-promo overflow-hidden bg-brand-blue">
    <div class="col-full flex h-full items-center">
      <div class="animate-marquee flex w-max">
        <div
          v-for="group in 2"
          :key="group"
          class="flex shrink-0 items-center gap-16 pr-16"
          :aria-hidden="group === 2 ? true : undefined"
        >
          <span
            v-for="(item, i) in promo.items"
            :key="`${group}-${i}`"
            class="text-promo text-brand-white"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 35s linear infinite;
}
</style>
