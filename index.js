var swiper = new Swiper(".swiper", {
  effect:"coverflow", 
  grabCursor: true,
  centeredSlides: true,
  initialSlide:2, 
  speed:600, 
  preventClicks:true, 
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 20,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  on:{
    click(event){
      swiper.slideTo(this.clickedIndex)
    }
  }, 
  pagination:{
    el:".swiper-pagination",
    clickable:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});



var swiper = new Swiper(".swiper2", {
  effect:"coverflow", 
  grabCursor: true,
  centeredSlides: true,
  initialSlide:1, 
  speed:600, 
  preventClicks:true, 
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 20,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  on:{
    click(event){
      swiper.slideTo(this.clickedIndex)
    }
  }, 
  pagination:{
    el:".swiper-pagination",
    clickable:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  if (mobileMenu.classList.contains("max-h-0")) {
    mobileMenu.classList.remove("max-h-0", "opacity-0");
    mobileMenu.classList.add("max-h-[500px]", "opacity-100");
  } else {
    mobileMenu.classList.add("max-h-0", "opacity-0");
    mobileMenu.classList.remove("max-h-[500px]", "opacity-100");
  }
});