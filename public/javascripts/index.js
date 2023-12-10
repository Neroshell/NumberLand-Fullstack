AOS.init({
    duration: 2000,
    once: true,
     
  });


let body = document.querySelector(".body");

document.addEventListener('DOMContentLoaded', function() {
    let bar = document.querySelector("#bar");
    bar.addEventListener("click", openNav);

    function openNav() {
    
        document.getElementById("mySidenav").style.width = "60%";
    }

    let close = document.getElementById("closeNav");
    close.addEventListener("click", closeNav);

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
});


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  autoplay:true,
  autoplayTimeout:4000,
  autoplayHoverPause:true,
  dots: true, 
 
  responsive:{
      0:{
          items:1,
          dots: true,
      },
      600:{
          items:2,
          dots: true,
      },
      1000:{
          items:3,
          dots: true,
      }
  }
})


window.addEventListener("load", () => {
    const preload = document.querySelector(".preload");
    preload.style.display = "none";    
});