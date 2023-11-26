export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon'],
  devServer: {
    port: 3000,
  },
  runtimeConfig: {
    port: 3000,
  }
})
