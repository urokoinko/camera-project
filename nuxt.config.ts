// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "@/assets/main.css",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@hypernym/nuxt-gsap',
    (_options, nuxt)=>{
      nuxt.hooks.hook('vite:extendConfig', (config)=>{
        config.plugins?.push(vuetify({autoImport: true}))
      })
    },
  ],
  vite:{
    vue:{
      template:{
        transformAssetUrls,
      }
    }
  },
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true,
    }
  },
  plugins:[
    {src: '~/plugins/fontawesome.client.ts'},
    {src: '~/plugins/lottie.client.ts'},
    {src: '~/plugins/netlify.client.ts'},
    {src: '~/plugins/jquery.js', mode: 'client'},

  ],
})


