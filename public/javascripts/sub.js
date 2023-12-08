const answerElement = document.querySelector(".answer-1");
const fakeAnswer = document.querySelector(".dummy_1");
const fakeAnswer2 = document.querySelector(".dummy_2");
var result = 0;

let remark = document.querySelector('.remark');
var audio = new Audio("/audio/buzzer.mp3");
var audio2 = new Audio("/audio/bell.wav");
var score = document.querySelector('.main-score');
var scoreValue = 0;
score.innerHTML = scoreValue;
var endgame = document.querySelector('.end-game');
var endgameValue = 0;
endgameValue.innerHTML = endgameValue;
var audio3 = new Audio("/audio/end-round.mp3");
var audio4 = new Audio("/audio/restart-sound.mp3");
var modalfirstScore = document.querySelector('.modal-first-score');
var comment = document.querySelector('.comment');


function updateEndgame(){

   endgameValue++;
   endgame.innerHTML = endgameValue;
   if (endgameValue === 10) {
      audio3.play();
      secondModal.style.display = "block";
      overLay.style.display = "block";

   }

}

function updateComment() {
   if (scoreValue === 1){
      comment.innerHTML = "Too low! You need to keep practicing";
   }
   if (scoreValue === 2){
      comment.innerHTML = "Keep learning! dont give up yet";
   }
   if (scoreValue === 3){
      comment.innerHTML = "You deserve a higher score! pratice makes perfect";
   }
   if (scoreValue === 4){
      comment.innerHTML = "Very close to average! Keep improving";
   }

   if (scoreValue === 5){
      comment.innerHTML = "Average is not your best. Your best is yet to come. keep trying";

   }
   
   if (scoreValue === 6){
      comment.innerHTML = "Fairly good! The more you practice, the better you become.";
   }
   if (scoreValue === 7){
      comment.innerHTML = "Good! This is clever! you are not far from excellent";
   }
   if (scoreValue == 8){
      comment.innerHTML = "intelligent performance!";
   }
   if (scoreValue === 9){
      comment.innerHTML = "Wow! coolest kid in the world! You are brilliant";
   }
   if (scoreValue == 10){
      
         if (scoreValue === 10) {
            let success = [
               "Congratulations! Awesome Performance, You deserve an accolade",
               "Congrats! This is pure perfection! Well done",
               "Big win!! You are a genius"
            ];
      
            let gam = Math.floor(Math.random() * success.length);
      
            comment.innerHTML = success[gam]; // Change 'comments' to 'comment'
         }
      }
      
}

function updateEndgame(){

   endgameValue++;
   endgame.innerHTML = endgameValue;
   if (endgameValue === 10) {
      audio3.play();
      secondModal.style.display = "block";
      overLay.style.display = "block";

   }

}


function equation() {

   var firstNumber = document.querySelector(".num-1");
   var secondNumber = document.querySelector(".num-2");
   var num1 = Math.floor(Math.random() * 15);
   var num2 = Math.floor(Math.random() * 15);
   var dummy = Math.floor(Math.random() * 15);
   var dummy2 = Math.floor(Math.random() * 15);
   result = num1 - num2;
   var allAnswer = [result, dummy, dummy2];
   var switchAnswer = [];

   for (var i = allAnswer.length; i > 0; i--) {
      var randomPick = Math.floor(Math.random() * i);
      var newPick = allAnswer.splice(randomPick, 1)[0];
      switchAnswer.push(newPick);
   }

   firstNumber.innerHTML = num1;
   secondNumber.innerHTML = num2;
   answerElement.innerHTML = switchAnswer[0];
   fakeAnswer.innerHTML = switchAnswer[1];
   fakeAnswer2.innerHTML = switchAnswer[2];


}

equation();

answerElement.addEventListener('click', function () {
   updateEndgame();



   if (answerElement.innerHTML == result) {
      scoreValue++;
      score.innerHTML = scoreValue;
      modalfirstScore.innerHTML = scoreValue;
      audio2.play();
      remark.style.opacity = '1';
      remark.innerHTML = "Correct answer, Well done!";
      setTimeout(function () {
         remark.style.opacity = '0';
         equation();
      }, 2000);

   } else {

      equation();
      audio.play();

   }

   updateComment();
});

fakeAnswer.addEventListener('click', function () {
  updateEndgame();
   if (fakeAnswer.innerHTML == result) {
      scoreValue++;
      score.innerHTML = scoreValue;
      modalfirstScore.innerHTML = scoreValue;
      audio2.play();
      remark.innerHTML = "Correct answer, Well done!";
      remark.style.opacity = '1';
      setTimeout(function () {
         remark.style.opacity = '0';
         equation();
      }, 2000);

   } else {
      equation();
      audio.play();

   }

   updateComment();
});

fakeAnswer2.addEventListener('click', function () {
  updateEndgame();

   if (fakeAnswer2.innerHTML == result) {
      scoreValue++;
      score.innerHTML = scoreValue;
      modalfirstScore.innerHTML = scoreValue;
      audio2.play();
      remark.innerHTML = "Correct answer, Well done!";
      remark.style.opacity = '1';
      setTimeout(function () {
         remark.style.opacity = '0';
         equation();
      }, 2000);

   } else {

      equation();
      audio.play();
   }

   updateComment();
});

function resetScore() {

   score.innerHTML = 0;
   endgame.innerHTML = 0;
   scoreValue = 0;

   if (endgameValue === 10) {
      endgameValue = 0;
   }

}


var secondClose = document.querySelector(".times-second-modal");
var secondModal = document.querySelector(".second-modal");
var overLay = document.querySelector(".overlay");

secondClose.addEventListener("click", function (e) {

   resetScore()
   equation();
   secondModal.style.display = "none";
   overLay.style.display = "none";


});

var modalButton2 = document.querySelector(".btn-modal-2");

modalButton2.addEventListener("click", function (e) {
   resetScore();
   secondModal.style.display = "none";
   overLay.style.display = "none";
   audio4.play();
   equation();


});


document.addEventListener('DOMContentLoaded', function () {

   var bar = document.querySelector("#bar");
   bar.addEventListener("click", openNav);

   function openNav() {
      document.getElementById("mySidenav").style.width = "60%";
   }

   var close = document.getElementById("closeNav");
   close.addEventListener("click", closeNav);

   function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
   }
});

let preload = document.querySelector(".preload");
window.addEventListener("load", () => {

   preload.style.display = "none";
 


});

