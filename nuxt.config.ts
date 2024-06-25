// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  router:{
    // base: '/camera-project/'
  },
  generate:{
    // dir:'docs'
  },
  devtools: { enabled: true },
  css:[
    "@/assets/main.css",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  modules:['@hypernym/nuxt-gsap'],
  gsap:{
    extraPlugins:{
      scrollTrigger: true,
      scrollTo: true,
    }
  },
})

