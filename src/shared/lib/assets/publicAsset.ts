/** Абсолютный URL файла из public/ с учётом app.baseURL */
export function publicAsset(path: string) {
  const config = useRuntimeConfig()
  const base = config.public.appBaseURL as string
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (base === '/') {
    return normalized
  }
  return `${base.replace(/\/$/, '')}${normalized}`
}
