// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: ["@nuxtjs/tailwindcss"],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/v2/'
      ]
    }
  }
})