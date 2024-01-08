import { defineNuxtPlugin } from '#app'
import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';

export default defineNuxtPlugin((nuxtApp: any) => {
  // Check if the code is running on the client side and if a Firebase app has not been initialized yet
  if (process.client && !firebase.apps.length) {
    // Get the Firebase configuration from the Nuxt app instance
    const config = nuxtApp.$config.vuefire.config;

    // Initialize a new Firebase app with the configuration
    firebase.initializeApp(config);

    // Initialize Firebase Analytics
    const analytics = firebase.analytics();

    // Inject the Firebase Analytics instance into the Nuxt app instance
    // so it can be accessed in the components with this.$analytics
    nuxtApp.provide('analytics', analytics);
  }
});