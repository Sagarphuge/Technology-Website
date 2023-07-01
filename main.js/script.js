var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay:{
      delay:2000,
  },
  breakpoints:{
    "991":{
      slidesPerView:3,
      spaceBetween:24,
    },
    "767":{
      slidesPerView:2,
      spaceBetween:24,
    },
    "320":{
      slidesPerView:1,
      spaceBetween:16,
    }
  }
});



let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".change-num-wrap");
let started = false;

window.onscroll = function(){
  if(window.scrollY > section.offsetTop-300){
    if(!started){
      nums.forEach((num)=>{startCount(num)});
    }
    started = true;
  }
}

function startCount(el){
  let goal = el.dataset.goal;
  let count = setInterval(()=>{
    el.textContent++;
    if(el.textContent == goal){
      clearInterval(count);
    }
  },1000/goal)
}
