<script setup lang="ts">
const { meta } = useSiteContent()

const nameRest = computed(() => {
  const name = meta.siteName
  return name.length > 0 && name[0] === 'M' ? name.slice(1) : name
})
</script>

<template>
  <span class="site-logo-wordmark whitespace-nowrap">
    <img
      :src="publicAsset('/images/logo-mark.png')"
      alt=""
      aria-hidden="true"
      class="site-logo-mark"
      width="41"
      height="30"
    ><span>{{ nameRest }}</span>
  </span>
</template>
