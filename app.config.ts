/**
 * Expose reactive configuration within your application with the App Config file.
 * Nuxt 3 provides an app.config config file to expose reactive configuration within your application
 * with the ability to update it at runtime within lifecycle or using a nuxt plugin and editing it with HMR (hot-module-replacement).
 * You can easily provide runtime app configuration using app.config.ts file. It can have either of .ts, .js, or .mjs extensions.
 **/

export default defineAppConfig({
  title: 'Hello Nuxt',
  theme: {
    dark: false,
    colors: {
      primary: '#ff0000'
    }
  }
})
