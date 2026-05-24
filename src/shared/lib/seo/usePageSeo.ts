export type PageSeoKey = 'home' | 'about' | 'classes'

const PAGE_PATHS: Record<PageSeoKey, string> = {
  home: '/',
  about: '/about-us',
  classes: '/classes',
}

function joinAbsoluteUrl(siteUrl: string, baseURL: string, path: string) {
  const origin = siteUrl.replace(/\/$/, '')
  const base = baseURL === '/' ? '' : baseURL.replace(/\/$/, '')
  if (path === '/') {
    return `${origin}${base}/`
  }
  return `${origin}${base}${path}`
}

export function usePageSeo(page: PageSeoKey) {
  const { seo } = useSiteContent()
  const config = useRuntimeConfig()

  const pageMeta = seo.pages[page]
  const title = pageMeta.title
  const description = pageMeta.description

  const siteUrl = config.public.siteUrl as string
  const baseURL = config.public.baseURL as string
  const path = PAGE_PATHS[page]
  const canonical = joinAbsoluteUrl(siteUrl, baseURL, path)
  const ogImage = `${siteUrl.replace(/\/$/, '')}${publicAsset(seo.ogImage)}`

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ogUrl: canonical,
    ogType: 'website',
    ogLocale: 'ru_RU',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
  })

  useHead({
    link: [{ rel: 'canonical', href: canonical }],
  })
}
