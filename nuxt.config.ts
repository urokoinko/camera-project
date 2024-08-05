// https://nuxt.com/docs/api/configuration/nuxt-config

// import { componentNames } from "#build/components";
// import { ErrorMessage, FieldArray } from "vee-validate";



export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "@/assets/main.css",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  modules: [
    '@hypernym/nuxt-gsap',
  
      '@vee-validate/nuxt',
      // {
      //   autoImports: true,
      //   componentNames: {
      //     Form: 'VeeFrom',
      //     Field: 'VeeField',
      //     FieldArray: 'VeeFieldArray',
      //     ErrorMessage: 'VeeErrorMessge',
      //   },
      // },
  ],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true,
    }
  },
  // plugins:[
  //   '@/plugins/vee-validate'
  // ],
  runtimeConfig:{
    public:{
      newt:{
        formEndpoint:''
      }
    }
  },
})


