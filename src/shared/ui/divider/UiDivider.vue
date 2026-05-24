<script setup lang="ts">
withDefaults(
  defineProps<{
    /** black — между белыми блоками; light — как линия в хедере */
    variant?: 'black' | 'light'
  }>(),
  { variant: 'black' },
)
</script>

<template>
  <hr
    class="m-0 h-px w-full border-0"
    :class="variant === 'light' ? 'bg-brand-white/40' : 'bg-brand-black'"
    role="separator"
  >
</template>
