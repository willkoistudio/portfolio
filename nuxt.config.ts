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
    'nuxt-icon',
    "@nuxt/content",
    'nuxt-vuefire'
  ],
  plugins: [
    {
      src: '~/plugins/firebase.ts',
      mode: 'client'
    }
  ],
  vuefire: {
    config: {
      apiKey: "AIzaSyD--Tt8alIX2fae_oHSUZodDYq-uU-vTu0",
      authDomain: "wkoistudio-portfolio.firebaseapp.com",
      projectId: "wkoistudio-portfolio",
      storageBucket: "wkoistudio-portfolio.appspot.com",
      messagingSenderId: "558609361398",
      appId: "1:558609361398:web:d789eb8c1f4866d1e7ffd7",
      measurementId: "G-5R1Y6J4B7Z"
    },
    auth: {
      enabled: true
    },
    appCheck: {
      // Allows you to use a debug token in development
      debug: process.env.NODE_ENV !== 'production',
      isTokenAutoRefreshEnabled: true,
      provider: 'ReCaptchaV3',
      // Find the instructions in the Firebase documentation, link above
      // key: '...',
    },
  }
})