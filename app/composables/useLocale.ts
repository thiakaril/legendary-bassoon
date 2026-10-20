import { computed, onMounted, watch } from 'vue'
import { content, type Locale } from '~/data/content'

type MailKind = 'waitlist' | 'demo'

export function useLocale() {
  const locale = useState<Locale>('locale', () => 'en')
  const copy = computed(() => content[locale.value])

  const setLocale = (next: Locale) => {
    locale.value = next
  }

  const toggleLocale = () => {
    locale.value = locale.value === 'en' ? 'id' : 'en'
  }

  useHead(() => ({
    htmlAttrs: { lang: locale.value },
    title: copy.value.meta.title,
    meta: [
      { name: 'description', content: copy.value.meta.description },
      { property: 'og:title', content: copy.value.meta.title },
      { property: 'og:description', content: copy.value.meta.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: locale.value === 'en' ? 'en_US' : 'id_ID' },
    ],
  }))

  const mailto = (kind: MailKind) => {
    const message = copy.value.mailto[kind]
    const address = copy.value.footer.contact
    return `mailto:${address}?subject=${encodeURIComponent(message.subject)}&body=${encodeURIComponent(message.body)}`
  }

  const mailtoWaitlist = computed(() => mailto('waitlist'))
  const mailtoDemo = computed(() => mailto('demo'))

  onMounted(() => {
    const saved = window.localStorage.getItem('hruno-locale')
    if (saved === 'en' || saved === 'id') locale.value = saved
  })

  watch(locale, (value) => {
    if (import.meta.client) window.localStorage.setItem('hruno-locale', value)
  })

  return {
    locale,
    copy,
    setLocale,
    toggleLocale,
    mailtoWaitlist,
    mailtoDemo,
  }
}
