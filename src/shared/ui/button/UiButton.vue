<script setup lang="ts">
import { useButtonTokens } from '~/shared/lib/button-tokens/useButtonTokens'

const props = withDefaults(
  defineProps<{
    variant?: 'light' | 'dark' | 'nav'
    to?: string
    type?: 'button' | 'submit'
    narrow?: boolean
  }>(),
  { variant: 'light', type: 'button', narrow: false },
)

const { button } = useButtonTokens()
const styles = computed(() => button(props.variant === 'nav' ? 'light' : props.variant))

const classes = computed(() => {
  const motion = 'transition-figma'
  if (props.variant === 'nav') {
    return `${motion} inline-flex h-full w-full min-h-[76px] items-center justify-center px-6 text-nav-cta text-brand-white hover:bg-brand-white/10`
  }
  const base = `${motion} inline-flex h-12 items-center justify-center px-6 text-label`
  if (props.variant === 'light') {
    return `${base} bg-brand-cyan text-brand-black hover:bg-brand-white`
  }
  return `${base} bg-brand-blue-deep text-brand-white hover:bg-brand-blue`
})

const minWidth = computed(() => {
  if (props.variant === 'nav') return undefined
  if (props.variant === 'dark' && props.narrow) return '106px'
  return '158px'
})
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="classes"
    :style="variant !== 'nav' ? { minWidth, minHeight: `${styles.height}px` } : undefined"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    :type="type"
    :class="classes"
    :style="variant !== 'nav' ? { minWidth, minHeight: `${styles.height}px` } : undefined"
  >
    <slot />
  </button>
</template>
