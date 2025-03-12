import "../lib/smooth";
import "./styles/style.css";
import { markers, scrollbar } from "../lib/smooth";

import { gsap } from "gsap";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // 최적화 

// 1. 터미널 창에서 git pull 실행한다.
// 1. 터미널 창에서 npm i 실행한다.
// 3. npm run dev로 사이트를 연다.
// 5. 코딩 시작.


const tl = gsap.timeline();


tl.to('.backgroundimage',{
  duration:5,
  x:-995
})
tl.to('.backgroundimage',{
  opacity:0.5,
})
tl.to('.backgroundimage',{ scale:2.7, duration:3 },'-=0.5')
tl.to('.title',{ scale:1.5, duration:3 },'<')
tl.to('.side',{ opacity:1, })










const img_tl = gsap.timeline();

img_tl.to('.small_image .image01 img',{rotate:10},0)
img_tl.to('.small_image .image02 img',{x:-840},0)
img_tl.to('.small_image .image03 img',{x:760,y:300},0)
img_tl.to('.small_image .image04 img',{x:-700,y:440},0)
img_tl.to('.small_image .image05 img',{x:550,y:-360},0)
img_tl.to('.small_image .image06 img',{x:750},0)
img_tl.to('.small_image .image07 img',{x:-610,y:-360},0)



ScrollTrigger.create({
  trigger: '.small_image',
  start: 'top top',
  end: '+=3000',
  animation: img_tl,
  pin: true,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})







const images = gsap.utils.toArray(".imagebox img");


ScrollTrigger.create({
  trigger: '.main04-1',
  start: 'top top',
  end: '+=3000',
  // animation: img_tl,
  pin: true,
  // pinSpacing: false,
  markers: true,
  scrub: true,
})

// ScrollTrigger.create({
//   trigger: '.main04-2',
//   start: 'top top',
//   end: '+=3000',
//   // animation: img_tl,
//   pin: true,
//   // pinSpacing: false,
//   // markers: true,
//   scrub: true,
// })

// ScrollTrigger.create({
//   trigger: '.main04-3',
//   start: 'top top',
//   end: '+=3000',
//   // animation: img_tl,
//   pin: true,
//   // pinSpacing: false,
//   // markers: true,
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

    if(progress >= 1 && progress <= 1.33333){
      i = 3;
      
    }


  

    gsap.to('.main07',{
      x: -470 * i
    })

    


    
  },
  // markers: true,
  scrub: true,
})



const tl8 = gsap.timeline();

tl8.to('.circle',{x:705, y:-150, rotation:360})
tl8.to('.circle',{clipPath:'circle(100%)'})
tl8.to('.circle img',{filter:'brightness(0.7)'})
tl8.from('.type8',{opacity:0,y:100})


// /* section08 */
ScrollTrigger.create({
  trigger: '.section08',
  start: 'top top',
  end: '+=3000',
  animation: tl8,
  pin: true,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})







/* section05 */

const btn = document.querySelector('.btn05');

const section05 = document.querySelector('.section05');
const y = section05.getBoundingClientRect().y;


btn.addEventListener('click',()=>{


  scrollbar.scrollTo(0, y, 600, {
      callback: () => {

        const sections = gsap.utils.toArray('.horizontal .section');

        const end = document.querySelector('.last').getBoundingClientRect().left

        const tween = gsap.to(sections,{ x: -end })

        ScrollTrigger.create({
          trigger: '.section05',
          start: 'top top',
          end: '+=3000',
          animation: tween,
          pin: true,
          markers: true,
          scrub: true,
        })
      },
    });


  // scrollbar.scrollTo(0, 100, 600, {
  //   callback: () => console.log('done!'),
  // });



})









markers();
