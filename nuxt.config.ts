const baseURL = (process.env.NUXT_APP_BASE_URL || '/').replace(/\/?$/, '/')

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Hruno — HR, with a copilot that does the work',
      meta: [
        {
          name: 'description',
          content:
            'An AI-native HR suite for Indonesian teams. People, leave, attendance, payroll and hiring in one record, with a copilot that reads and acts across it.',
        },
        { name: 'theme-color', content: '#111111' },
        { name: 'color-scheme', content: 'dark' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: `${baseURL}favicon.svg` },
      ],
    },
  },
})
