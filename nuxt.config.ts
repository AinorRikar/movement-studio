// https://nuxt.com/docs/api/configuration/nuxt-config
import siteContent from './content/site.ru.json'

const appBaseURL = process.env.NUXT_APP_BASE_URL || '/'

export default defineNuxtConfig({
  srcDir: 'src/',
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    configPath: 'tailwind.config.ts',
    cssPath: '~/assets/css/main.css',
  },
  imports: {
    dirs: [
      'shared/content',
      'shared/lib/**',
    ],
  },
  experimental: {
    appManifest: false,
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      baseURL: appBaseURL,
    },
  },
  app: {
    baseURL: appBaseURL,
    head: {
      title: siteContent.seo.defaultTitle,
      htmlAttrs: { lang: 'ru' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: siteContent.seo.description },
        { name: 'theme-color', content: '#000000' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: `${appBaseURL}favicon.ico` },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${appBaseURL}favicon-32x32.png` },
        { rel: 'apple-touch-icon', sizes: '180x180', href: `${appBaseURL}apple-touch-icon.png` },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&family=Encode+Sans+Condensed:wght@600&family=Encode+Sans+Expanded:wght@400&family=Encode+Sans+Semi+Condensed:wght@400;600&family=Roboto+Flex:wght@500&family=Roboto+Mono&display=swap',
        },
      ],
    },
  },
})
