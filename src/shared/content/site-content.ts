import siteContentRu from '../../../content/site.ru.json'

export type SiteContent = typeof siteContentRu

export const siteContent = siteContentRu

export function useSiteContent() {
  return siteContent
}
