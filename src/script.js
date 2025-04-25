// header
// Toggle mobile menu visibility
// document.getElementById('hamburgerBtn').addEventListener('click', function () {
//     const menu = document.getElementById('mobileMenu');
//     const hamburgerIcon = document.getElementById('hamburgerIcon');
//     const closeIcon = document.getElementById('closeIcon');

//     // Toggle the mobile menu visibility
//     menu.classList.toggle('hidden');

//     // Toggle between hamburger and close icons
//     hamburgerIcon.classList.toggle('hidden');
//     closeIcon.classList.toggle('hidden');
// });

// END header


//  thumbnails

// const screen = document.querySelector("#screen");

// window.addEventListener('DOMContentLoaded', () => {
//     for (let i = 1; i <= 6; i++) {
//         const thumb = document.querySelector(`#thumb${i}`);

//         thumb.addEventListener('click', () => {
//             // Disparition + zoom-out
//             screen.classList.remove("opacity-100", "scale-100");
//             screen.classList.add("opacity-0", "scale-95");

//             setTimeout(() => {
//                 screen.setAttribute("src", thumb.getAttribute("src"));

//                 // Réapparition + zoom-in
//                 screen.classList.remove("opacity-0", "scale-95");
//                 screen.classList.add("opacity-100", "scale-100");
//             }, 200);
//         });
//     }
// });
// end thumbnails

// Swiper
/////////////////////////////////
// new Swiper(".mySwiper", {
//     loop: true,
//     autoplay: {
//         delay: 4000,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         bulletClass: "custom-bullet",
//         bulletActiveClass: "custom-bullet-active",
//     },
// });
// swiper
////////////////////////
// const slider = document.getElementById("mobileSlider");
// const dotsContainer = document.getElementById("dots");

// const totalSlides = 2; // total real slides (each contains 3 features)
// let currentIndex = 1;
// let autoplayInterval;

// // SVGs
// const normalDot = `
//   <svg width="40" height="40" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="7" cy="7" r="6" fill="#9BA9C7"/>
//   </svg>
// `;

// const activeDot = `
//   <svg width="56" height="56" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="14" cy="14" r="12" stroke="#404D6A" stroke-width="2"/>
//     <circle cx="14" cy="14" r="7" fill="#404D6A"/>
//   </svg>
// `;

// // Create Dots
// for (let i = 0; i < totalSlides; i++) {
//     const dot = document.createElement("button");
//     dot.innerHTML = i === 0 ? activeDot : normalDot;
//     dot.setAttribute("data-index", i);
//     dot.className = "dot-svg";
//     dotsContainer.appendChild(dot);
// }

// const dots = dotsContainer.querySelectorAll("button");

// const updateDots = (index) => {
//     dots.forEach((dot, i) => {
//         dot.innerHTML = i === index ? activeDot : normalDot;
//     });
// };

// const scrollToSlide = (index) => {
//     const width = slider.offsetWidth;
//     slider.scrollTo({ left: width * index, behavior: "smooth" });
//     updateDots(index - 1);
// };

// const nextSlide = () => {
//     currentIndex++;
//     scrollToSlide(currentIndex);
// };

// const startAutoplay = () => {
//     autoplayInterval = setInterval(nextSlide, 3000);
// };

// const stopAutoplay = () => clearInterval(autoplayInterval);

// // Loop Logic
// slider.addEventListener("scroll", () => {
//     const width = slider.offsetWidth;
//     const scrollLeft = slider.scrollLeft;

//     if (scrollLeft % width !== 0) return;

//     currentIndex = Math.round(scrollLeft / width);

//     if (currentIndex === 0) {
//         setTimeout(() => {
//             slider.scrollLeft = width * totalSlides;
//             currentIndex = totalSlides;
//             updateDots(currentIndex - 1);
//         }, 200);
//     } else if (currentIndex === totalSlides + 1) {
//         setTimeout(() => {
//             slider.scrollLeft = width;
//             currentIndex = 1;
//             updateDots(currentIndex - 1);
//         }, 200);
//     } else {
//         updateDots(currentIndex - 1);
//     }
// });

// Init
// window.addEventListener("load", () => {
//     slider.scrollLeft = slider.offsetWidth; // go to first real slide
//     updateDots(0);
//     startAutoplay();
// });
