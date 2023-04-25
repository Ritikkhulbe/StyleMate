 
// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide: 'true',
//     fade: 'true',
//     grabCursor: 'true',
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     breakpoints:{
//         0: {
//             slidesPerView: 1,
//         },
//         520: {
//             slidesPerView: 2,
//         },
//         950: {
//             slidesPerView: 3,
//         },
//     },
//   });



// const productContainers = [...document.querySelectorAll('.slider_container')];
// const nxtBtn = [...document.querySelectorAll('nxt-btn')];
// const preBtn = [...document.querySelectorAll('pre-btn')];


// productContainers.forEach((item, i) => {
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     nxtBtn[i].addEventListener('click', () =>{
//         item.scrollLeft += containerWidth;
//     })
//     preBtn[i].addEventListener('click', () =>{
//         item.scrollLeft -= containerWidth;
//     })
// })


const slides = document.querySelectorAll(".slide_container")
// // var counter = 0;

// // slides.forEach(
// //     (slide, index)=>{
// //         slide.style.left = `${index * 100}%`
// //     }
// // )

// // const goPrev = () =>{
// //     if(counter>=0 && counter<=4){
// //         counter--;
// //         slideImage();
// //     }
// // }
// // const goNext = () =>{
// //     if(counter >= 0 && counter<=4){
// //         counter++;
// //         slideImage();
// //     }
// // }

// // const slideImage = () => {
// //     slides.forEach(
// //         (slide)=>{
// //             slide.style.transform = `translateX(-${counter * 100}%)`
// //         }    
// //     )
// // }


const nxtBtn = document.querySelectorAll('.goNext');
const prevBtn = document.querySelectorAll('.goPrev');

slides.forEach((item, i)=>{
    let = containerDimensions = item.getBoundingClientRect();
    let = containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth;
    })
    prevBtn[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth;
    })
})