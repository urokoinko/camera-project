// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
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
runtimeConfig:{
  public:{
    newt:{
      formEndpoint: ''
    }
  }
},
})


