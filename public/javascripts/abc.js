document.addEventListener('DOMContentLoaded', function() {
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
  
  function playSound(letter) {
	let audio = new Audio("/audio/letter-" + letter + ".mp3");
	audio.play();
  }
  let allAudio = [
	"/audio/letter-a.mp3",
	"/audio/letter-b.mp3",
	"/audio/letter-c.mp3",
	"/audio/letter-d.mp3",
	"/audio/letter-e.mp3",
	"/audio/letter-f.mp3",
	"/audio/letter-g.mp3",
	"/audio/letter-h.mp3",
	"/audio/letter-i.mp3",
	"/audio/letter-j.mp3",
	"/audio/letter-k.mp3",
	"/audio/letter-l.mp3",
	"/audio/letter-m.mp3",
	"/audio/letter-n.mp3",
	"/audio/letter-o.mp3",
	"/audio/letter-p.mp3",
	"/audio/letter-q.mp3",
	"/audio/letter-r.mp3",
	"/audio/letter-s.mp3",
	"/audio/letter-t.mp3",
	"/audio/letter-u.mp3",
	"/audio/letter-v.mp3",
	"/audio/letter-w.mp3",
	"/audio/letter-x.mp3",
	"/audio/letter-y.mp3",
	"/audio/letter-z.mp3"
  ]
  ;
  var buttons = document.querySelectorAll(".alpha-box");
  let listenButton = document.querySelector(".listen-btn");
  let remark = document.querySelector(".remark");
  let wrong = document.querySelector(".wrong");
  var audio2 = new Audio("/audio/bell.wav");
  var score = document.querySelector('.main-score');
  var scoreValue = 0;
  var playButton = document.querySelector('.play-btn');
  var endgame = document.querySelector('.end-game');
  var endgameValue = 0;
  endgame.textContent = 26;
  var audio = new Audio("/audio/buzzer.mp3");
  var audio3 = new Audio("/audio/end-round.mp3");
  var audio4 = new Audio("/audio/endsound.wav");
  var audio5 = new Audio("/audio/restart-sound.mp3");
  var audio6 = new Audio("/audio/gamelevel.wav");
  var tipBox = document.querySelector(".tip");
  var secondmodalTwo = document.querySelector(".second-modal-2");
  var overLay = document.querySelector(".overlay");
  var secondClose = document.querySelector(".times-second-modal");
  var restart_inModal2 = document.querySelector(".btn-modal-2");
  var modal_firstScore = document.querySelector(".modal-first-score");
  var comment = document.querySelector(".comment");
  
  function updateComment() {
	if (scoreValue == 0) {
	  comment.innerHTML = "You need help, keep practicing!";
	}
	if (scoreValue > 0 && scoreValue <= 5) {
	  comment.innerHTML = "Great effort, keep practicing!";
	}
	if (scoreValue > 5 && scoreValue <= 10) {
	  comment.innerHTML = "You're on the right track, keep going!";
	}
	if (scoreValue > 10 && scoreValue <= 15) {
	  comment.innerHTML = "Impressive progress, keep pushing forward.";
	}
	if (scoreValue > 15 && scoreValue <= 20) {
	  comment.innerHTML = "Fantastic work, keep up the momentum.";
	}
	if (scoreValue > 20 && scoreValue <= 25) {
	  comment.innerHTML = "Excellent job, you're almost there";
	}
	else if (scoreValue === 26) {
	  let success = ["Perfect score - you're alphabet superstar! ", "You nailed it! 26/26 – superb job!", "You're on fire! – Well done!", "Incredible! Flawless! Amazing!, Well done Champ"];
	  let gam = Math.floor(Math.random() * success.length);
	  comment.innerHTML = success[gam];
	}
  }
  
  function playRandom() {
	playButton.style.display = "none";
  
	function repeatSound() {
	  newSound.play();
	}
	listenButton.onclick = repeatSound;
	let alphabetData = [{
	  letter: 'A',
	  audio: '/audio/letter-a.mp3'
	}, {
	  letter: 'B',
	  audio: '/audio/letter-b.mp3'
	}, {
	  letter: 'C',
	  audio: '/audio/letter-c.mp3'
	}, {
	  letter: 'D',
	  audio: '/audio/letter-d.mp3'
	}, {
	  letter: 'E',
	  audio: '/audio/letter-e.mp3'
	}, {
	  letter: 'F',
	  audio: '/audio/letter-f.mp3'
	}, {
	  letter: 'G',
	  audio: '/audio/letter-g.mp3'
	}, {
	  letter: 'H',
	  audio: '/audio/letter-h.mp3'
	}, {
	  letter: 'I',
	  audio: '/audio/letter-i.mp3'
	}, {
	  letter: 'J',
	  audio: '/audio/letter-j.mp3'
	}, {
	  letter: 'K',
	  audio: '/audio/letter-k.mp3'
	}, {
	  letter: 'L',
	  audio: '/audio/letter-l.mp3'
	}, {
	  letter: 'M',
	  audio: '/audio/letter-m.mp3'
	}, {
	  letter: 'N',
	  audio: '/audio/letter-n.mp3'
	}, {
	  letter: 'O',
	  audio: '/audio/letter-o.mp3'
	}, {
	  letter: 'P',
	  audio: '/audio/letter-p.mp3'
	}, {
	  letter: 'Q',
	  audio: '/audio/letter-q.mp3'
	}, {
	  letter: 'R',
	  audio: '/audio/letter-r.mp3'
	}, {
	  letter: 'S',
	  audio: '/audio/letter-s.mp3'
	}, {
	  letter: 'T',
	  audio: '/audio/letter-t.mp3'
	}, {
	  letter: 'U',
	  audio: '/audio/letter-u.mp3'
	}, {
	  letter: 'V',
	  audio: '/audio/letter-v.mp3'
	}, {
	  letter: 'W',
	  audio: '/audio/letter-w.mp3'
	}, {
	  letter: 'X',
	  audio: '/audio/letter-x.mp3'
	}, {
	  letter: 'Y',
	  audio: '/audio/letter-y.mp3'
	}, {
	  letter: 'Z',
	  audio: '/audio/letter-z.mp3'
	}, ];
	let randomValue = Math.floor(Math.random() * alphabetData.length);
	let newSound = new Audio(alphabetData[randomValue].audio);
	if (endgameValue < 26) {
	  newSound.play();
	}
	restart_inModal2.addEventListener('click', resetScore)
	buttons.forEach(function(button) {
	  button.onclick = function() {
		endgameValue++;
		endgame.innerHTML = endgameValue;
		if (endgameValue === 26) {
		  modal_firstScore.innerHTML = scoreValue;
		  secondmodalTwo.style.display = "block";
		  overLay.style.display = "block";
		  audio6.play();
		  updateComment();
		}
		let correctLetter = alphabetData[randomValue].letter;
		if (correctLetter === button.textContent) {
		  audio2.play();
		  button.style.backgroundColor = 'green';
		  remark.style.opacity = '1';
		  remark.innerHTML = 'Correct letter!';
		  remark.style.backgroundColor = 'green';
		  scoreValue++;
		  score.innerHTML = scoreValue;
		  modal_firstScore.innerHTML = scoreValue;
		  setTimeout(() => {
			playRandom();
		  }, 2000);
		  setTimeout(() => {
			remark.style.opacity = '0';
		  }, 2000);
		} else {
		  audio.play();
		  remark.innerHTML = 'Wrong Letter! Try again';
		  remark.style.opacity = '1';
		  remark.style.backgroundColor = 'red';
		  button.style.backgroundColor = 'red'; // Reset other buttons
		  setTimeout(() => {
			remark.style.opacity = '0';
		  }, 2000);
		  setTimeout(() => {
			playRandom();
		  }, 2000);
		}
	  };
	});
  };
  playButton.addEventListener("click", () => {
	buttons.forEach(button => {
	  button.onclick = null;
	  button.style.backgroundColor = "#FCE22A";
	});
	tipBox.style.display = "block";
	tipBox.innerHTML = 'Useful tip <br> Click on the corresponding letter';
	setTimeout(() => {
	  tipBox.style.opacity = 1;
	}, 500);
	setTimeout(() => {
	  tipBox.style.opacity = 0;
	}, 4000);
	setTimeout(() => {
	  tipBox.style.display = "none";
	}, 4800);
	audio3.play();
	playButton.style.display = "none";
	setTimeout(() => {
	  playRandom();
	}, 4000);
  });
  
  function firstTip() {
	tipBox.innerHTML = "Learn the alphabets, click on the buttons"
	setTimeout(() => {
	  tipBox.style.opacity = 1;
	}, 500);
	setTimeout(() => {
	  tipBox.style.opacity = 0;
	}, 4000);
	setTimeout(() => {
	  tipBox.style.display = 'none';
	}, 4800);
  }
  firstTip();
  secondClose.addEventListener('click', resetScore);
  restart_inModal2.addEventListener('click', reset)
  
  function resetScore() {
	secondmodalTwo.style.display = 'none';
	overLay.style.display = 'none';
	score.innerHTML = 0;
	scoreValue = 0;
	endgame.textContent = '26';
	endgameValue = 0;
	playButton.innerHTML = "Play again";
	playButton.style.display = 'block';
	buttons.forEach(function(button) {
	  button.onclick = null;
	});
  }
  
  
  function reset() {
	secondmodalTwo.style.display = 'none';
	overLay.style.display = 'none';
	score.innerHTML = 0;
	scoreValue = 0;
	endgame.textContent = '26';
	endgameValue = 0;
	audio5.play();
	playButton.style.opacity = "0";
	buttons.forEach(function(button) {
	  button.style.backgroundColor = "#FCE22A";
	  button.onclick = null;
	});
	setTimeout(() => {
	  playRandom();
	}, 8500);
  };

let preload = document.querySelector(".preload");

window.addEventListener("load", () => {

	preload.style.display = "none";
  


});