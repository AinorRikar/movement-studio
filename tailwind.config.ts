import type { Config } from 'tailwindcss'
import designSystem from './src/shared/config/design-system.json'

const { colors, typography, breakpoints, layout, components } = designSystem

const config: Config = {
  content: [
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    screens: {
      tablet: `${breakpoints.tablet.minWidth}px`,
      desktop: `${breakpoints.desktop.minWidth}px`,
    },
    extend: {
      gridTemplateColumns: {
        site: 'repeat(12, minmax(0, 1fr))',
        cards: 'repeat(2, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-9': 'span 9 / span 9',
      },
      colors: {
        canvas: colors.palette.canvas,
        brand: {
          black: colors.palette.black,
          white: colors.palette.white,
          blue: colors.palette.blue,
          'blue-deep': colors.palette['blue-deep'],
          magenta: colors.palette.magenta,
          cyan: colors.palette.cyan,
          gray: colors.palette['gray-500'],
          'gray-light': colors.palette['gray-200'],
        },
        surface: colors.semantic.surface,
      },
      fontFamily: {
        display: typography.fontFamily.display,
        heading: typography.fontFamily.heading,
        body: typography.fontFamily.body,
        accent: typography.fontFamily.accent,
        ui: typography.fontFamily.ui,
        mono: typography.fontFamily.mono,
      },
      maxWidth: {
        site: `${layout.maxWidth}px`,
      },
      spacing: designSystem.spacing.scale,
      height: {
        'promo-desktop': `${components.promoBar.height.desktop}px`,
        'promo-mobile': `${components.promoBar.height.mobile}px`,
        btn: `${components.button.light.height}px`,
      },
      minHeight: {
        'section-sm': '480px',
        'section-md': '640px',
        'section-lg': '800px',
      },
      transitionDuration: {
        fast: designSystem.motion.duration.fast,
        normal: designSystem.motion.duration.normal,
        figma: designSystem.motion.duration.prototype,
      },
      transitionTimingFunction: {
        'figma-out': designSystem.motion.easing.outCubic,
      },
    },
  },
  plugins: [],
}

export default config
