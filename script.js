// href clicked active link start 
document.addEventListener('DOMContentLoaded', () => {
    const currentHTMLPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
  
    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (currentHTMLPage === linkPath) {
        link.classList.add('active');
      }
    });
});
// href clicked active link end


// ...................................................... combo swiper start .................................
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 4,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    300: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    519: {
      slidesPerView: 2,
    },
    694: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    963: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    }                          
  }
});
// ..................................................... combo swiper end ....................................


// ...................................................... combo swiper start .................................
// var swiper = new Swiper(".mySwiper2", {
//   spaceBetween: 30,
//   slidesPerView: 4,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     0: {
//         slidesPerView: 1,
//     },
//     300: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },
//     519: {
//       slidesPerView: 2,
//     },
//     694: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//     },
//     963: {
//       slidesPerView: 4,
//     },
//     1400: {
//       slidesPerView: 5,
//     }                          
//   }
// });
// ..................................................... combo swiper end ....................................