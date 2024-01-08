// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@dargmuesli/nuxt-cookie-control',
    '@nuxt/devtools',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@unlazy/nuxt',
    '@nuxtjs/robots',
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    'nuxt-primevue',
    'nuxt-icon'
  ],
})
