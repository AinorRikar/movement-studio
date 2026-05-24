<script setup lang="ts">
const { about } = useSiteContent()
</script>

<template>
  <section class="site-grid section-rule-top bg-brand-black">
    <div class="col-third sidebar-col bg-brand-black">
      <h2 class="text-title text-brand-white">
        {{ about.instructors.title }}
      </h2>
    </div>

    <div class="col-two-thirds grid-cards-2">
      <article
        v-for="person in about.instructors.people"
        :key="person.name"
        class="flex min-h-[327px] flex-col bg-brand-black desktop:min-h-[345px]"
      >
        <div class="relative h-[200px] overflow-hidden">
          <img
            :src="publicAsset(person.image)"
            :alt="person.name"
            class="h-full w-full object-cover grayscale"
          >
        </div>
        <div class="flex flex-1 flex-col p-6">
          <h3 class="text-person-name text-brand-white">
            {{ person.name }}
          </h3>
          <p class="text-body mt-1 text-brand-white/90">
            {{ person.role }}
          </p>
          <p class="text-body stack-4 line-clamp-4 text-brand-white/90">
            {{ person.bio }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
