import "../lib/smooth";
import "./styles/style.css";
import { markers } from "../lib/smooth";

import { gsap } from "gsap";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger,Draggable,MotionPathPlugin);

// 1. 터미널 창에서 git pull 실행한다.
// 1. 터미널 창에서 npm i 실행한다.
// 3. npm run dev로 사이트를 연다.
// 5. 코딩 시작.


const tl = gsap.timeline();


tl.to('.backgroundimage',{
  duration:5,
  x:-300
})
tl.to('.backgroundimage',{
  opacity:0.5,
})
tl.to('.backgroundimage',{
  scale:3,
  duration:3
},'-=0.5')
tl.to('.side',{
  opacity:1,
})

const img_tl = gsap.timeline();


img_tl.to('.small_image .image02',{x:300})
img_tl.to('.small_image .image03',{x:200,y:300},0)

// ScrollTrigger.create({
//   trigger: '.small_image',
//   start: 'top top',
//   end: '+=3000',
//   animation: img_tl,
//   pin: true,
//   // pinSpacing: false,
//   markers: true,
//   scrub: true,
// })






// ScrollTrigger.create({
//   trigger: '.small_image',
//   start: 'top top',
//   startTrigger:'.image02',
//   end: '+=3000',
//   // animation: ,
//   pin: true,
//   // pinSpacing: false,
//   markers: true,
//   scrub: true,
// })



const 정민 = gsap.timeline();

정민.to('.main03',{scale:1})
정민.to('.bgsub',{opacity:1},'-=0.2')

ScrollTrigger.create({
  trigger: '.box03',
  start: 'top top',
  end: '+=2000',
  animation: 정민,
  pin: true,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})


ScrollTrigger.create({
  trigger: '.section07',
  start: 'top top',
  end: '+=3000',
  // animation: 정민,
  pin: true,
  // pinSpacing: false,
  onUpdate:({progress})=>{
  
    
    let i = 0;
  
    if(progress >= 0 && progress <= 0.33333){
      i = 0;
    }
  
    if(progress >= 0.33334 && progress <= 0.66666){
      i = 1;
      
    }
  
    if(progress >= 0.66667 && progress <= 1){
      i = 2;
      
    }
  

    gsap.to('.main07',{
      x: -300 * i
    })
  },
  markers: true,
  scrub: true,
})











markers();
