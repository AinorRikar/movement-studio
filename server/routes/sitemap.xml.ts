export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const siteUrl = config.public.siteUrl as string
  const baseURL = config.public.appBaseURL as string
  const base = baseURL === '/' ? '' : baseURL.replace(/\/$/, '')
  const origin = siteUrl.replace(/\/$/, '')

  const paths = ['/', '/about-us', '/classes']
  const urls = paths.map((path) => {
    const loc = path === '/'
      ? `${origin}${base}/`
      : `${origin}${base}${path}`
    return `  <url><loc>${loc}</loc></url>`
  }).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  return xml
})
