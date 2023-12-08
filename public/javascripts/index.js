AOS.init({
    duration: 2000,
    once: true,
     
    
  });

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


let closeTwo = document.querySelector(".close-two");
let modal  = document.querySelector(".modal-box");
let body = document.querySelector(".body");
closeTwo.addEventListener("click", closeModal);
function closeModal() {

    modal.style.display = "none";

}

let getStarted = document.querySelector(".get-started");

getStarted.addEventListener("click", showModal);

function showModal() {
   
    modal.style.display = "flex";
   
}

let formButton = document.querySelector(".form-btn");
let inputField = document.querySelector("#input");
let error = document.querySelector(".error-message");
let errorTwo = document.querySelector(".error-2");


formButton.addEventListener("click", signup);

function signup(e) {

    if(inputField.value === ""){
        error.innerHTML = "Input field is required"
        error.style.color = "red";
        e.preventDefault();

    }else{
        errorTwo.innerHTML = "This is a demo. You cannot signup Yet"
        errorTwo.style.color = "#F94A29";
        e.preventDefault();
    }

}

let preload = document.querySelector(".preload");

window.addEventListener("load", () => {

        preload.style.display = "none";
      


});