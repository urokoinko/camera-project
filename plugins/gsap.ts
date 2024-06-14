import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default defineNuxtPlugin(() =>{
    return{
        provide:{
            gsap
        }
    }
})

