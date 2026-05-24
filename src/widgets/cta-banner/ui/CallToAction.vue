<script setup lang="ts">
import { UiButton } from '~/shared/ui/button'

const { cta, common } = useSiteContent()
</script>

<template>
  <section class="site-grid row-cta items-center bg-brand-blue page-inset-x py-16">
    <div class="col-cta text-center">
      <p class="text-cta text-brand-white">
        {{ cta.body }}
      </p>
      <div class="stack-10 flex justify-center">
        <UiButton to="/classes">
          {{ common.bookWithUs }}
        </UiButton>
      </div>
    </div>
  </section>
</template>
