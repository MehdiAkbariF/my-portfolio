import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import fa from '../messages/fa.json'
import en from '../messages/en.json'

const messagesMap = {
  fa,
  en,
} as const

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: messagesMap[locale as keyof typeof messagesMap],
  }
})