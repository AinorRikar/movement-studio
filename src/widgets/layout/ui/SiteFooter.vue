<script setup lang="ts">
const { meta, footer } = useSiteContent()
</script>

<template>
  <footer class="overflow-visible bg-brand-cyan text-brand-black">
    <div class="site-grid row-footer-main items-start">
      <div class="col-third content-inset-x py-12 desktop:px-12 desktop:py-16">
        <p class="text-footer-logo">
          {{ meta.logoShort }}
        </p>
      </div>

      <div class="col-third content-inset-x py-12 desktop:px-12 desktop:py-16">
        <ul class="space-y-6 text-footer">
          <li class="space-y-1">
            <p>{{ footer.contact.emailLabel }}</p>
            <p>{{ footer.contact.email }}</p>
          </li>
          <li class="space-y-1">
            <p>{{ footer.contact.instagramLabel }}</p>
            <p>{{ footer.contact.instagram }}</p>
          </li>
          <li class="space-y-1">
            <p>{{ footer.contact.facebookLabel }}</p>
            <p>{{ footer.contact.facebook }}</p>
          </li>
        </ul>
      </div>

      <div class="col-third content-inset-x py-12 desktop:px-12 desktop:py-16">
        <div class="space-y-6 text-footer">
          <p>{{ footer.address.label }}</p>
          <div class="space-y-1">
            <p>{{ footer.address.line1 }}</p>
            <p>{{ footer.address.phone }}</p>
          </div>
          <p class="pt-2">
            {{ footer.address.copyright }}
          </p>
        </div>
      </div>
    </div>

    <div class="site-grid row-footer-links">
      <div class="footer-cta-slot bg-brand-blue">
        <NuxtLink
          to="/about-us"
          class="footer-cta-tile bg-brand-blue px-6 text-footer-cta text-brand-white desktop:px-12"
        >
          {{ footer.links.ourSocials }}
        </NuxtLink>
      </div>
      <div class="footer-cta-slot bg-brand-black">
        <a
          :href="`mailto:${footer.contact.email}`"
          class="footer-cta-tile bg-brand-black px-6 text-footer-cta text-brand-white desktop:px-12"
        >
          {{ footer.links.emailUs }}
        </a>
      </div>
      <div class="footer-cta-slot bg-brand-magenta">
        <NuxtLink
          to="/classes"
          class="footer-cta-tile bg-brand-magenta px-6 text-footer-cta text-brand-black desktop:px-12"
        >
          {{ footer.links.bookWithUs }}
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
