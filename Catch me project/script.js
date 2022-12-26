var main = document.querySelector("main");
var section = document.createElement("section");
var title = document.createElement("div");
title.innerHTML = "CATCH ME IF YOU CAN!!"
title.className = "title"
var panelContainer = document.createElement("div");
panelContainer.className = "panelContainer"
var panel = document.createElement("div");
panel.className = "panel";


var scoreTitle = document.createElement("div");
scoreTitle.innerHTML = "Score:"
var score = document.createElement("span");
score.className = "score";
score.innerHTML = 0;

var pointsTitle = document.createElement("div")
pointsTitle.innerHTML = "Points to Next level:"
var points = document.createElement("span");
points.className = "points";
points.innerHTML = "10";

var levelTitle = document.createElement("div")
levelTitle.innerHTML = "Level:"
var level = document.createElement("span");
level.className = "level";
level.innerHTML = "1";

var missedClicksTitle = document.createElement("div");
missedClicksTitle.innerHTML = "Missed Clicks:"
var missedClicks = document.createElement("span");
missedClicks.className = "missedClicks";
missedClicks.innerHTML = 0;

var timerTitle = document.createElement("div");
timerTitle.innerHTML = "Timer:"
var timer = document.createElement("span");
timer.className = "timer";
timer.innerHTML = `${timer}`;

var highScoresTitle = document.createElement("div")
highScoresTitle.innerHTML = "High Scores"
var highScores = document.createElement("span");
highScores.className = "highScores";



var Players = [
  { date: "10/11/12", fname: "Chana Bendahan  ", score: "600" },
  { date: "22/05/21", fname: "Yaakov Bendahan  ", score: "512" },
  { date: "30/12/22", fname: "Moishy Bendahan  ", score: "446" },
  { date: "15/07/22", fname: "Sara Bendahan  ", score: "300" },
  { date: "04/11/22", fname: "Yissi Bendahan  ", score: "205" },]


var HIGHSCOREJSON = localStorage.HIGHSCORES;
if (HIGHSCOREJSON) {
  var hs = JSON.parse(HIGHSCOREJSON)
  if (hs && hs.length > 0) {
    Players = hs;

  } else {
    updateLS()
  }

} else {
  updateLS()
}

function updateLS() {
  HIGHSCOREJSON = JSON.stringify(Players)
  localStorage.HIGHSCORES = HIGHSCOREJSON;
}

createHTML()

function createHTML() {
  highScores.innerHTML = "";
  Players.forEach((Players, i) => {

    var div = document.createElement("div");

    div.id = "player" + i;
    div.className = "hsdivs"
    const p = document.createElement("p");
    p.innerText = Players.fname;
    p.className = "p"
    const date = document.createElement("span")
    date.innerText = Players.date;
    date.className = "hide";
    const span = document.createElement("span");
    span.innerText = Players.score;
    span.className = "span";

    p.style.display = "inline"
    div.append(p, date, span)
    Players.DOM = ("div")
    highScores.append(div);


  })

}
var gameContainer = document.createElement("div");
gameContainer.className = "gameContainer";
var catchMe = document.createElement("div");
catchMe.id = "catchMe"
catchMe.innerHTML = "Click Me!"



const G = {
  score: { $: score, val: 0 },
  level: { $: level, val: 1 },
  points: { $: points, val: 10 },
  missedClicks: { $: missedClicks, val: 0 },
  update: function (key) {
    this[key].$.innerHTML = this[key].val;
  },
};

panel.append(scoreTitle, score, pointsTitle, points, levelTitle, level, missedClicksTitle, missedClicks, timerTitle, timer, highScoresTitle, highScores);
panelContainer.append(panel);
gameContainer.append(catchMe);
section.append(panelContainer, title, gameContainer);
main.append(section);



var confirm = confirm("click to start");
if (confirm) {
  startGame()
}


var duration = 2;

function startMoving() {
  catchMe.className = "spinning";
  catchMe.style.animationDuration = duration + "s";
  gameContainer.append(catchMe);
  moveDiv()

}

game()

let int = null;
let timeSecond = 60;
timer.innerHTML = `${timeSecond}`;

function startGame() {
  const int = setInterval(() => {
    timeSecond--;
    timer.innerHTML = `${timeSecond}`;
    if (timeSecond < 1) {
      clearInterval(int);
    }
    if (timeSecond > 0) {
      startMoving()
    }
    if (timeSecond <= 0) {
      gameOver()
    }

  }, 1000);

};


var interval = 300;

function moveDiv() {


  var mathRandom = Math.floor(Math.random() * 500);
  catchMe.style.top = mathRandom + "px",
    catchMe.style.left = mathRandom + "px"


}
setTimeout(moveDiv, interval);

catchMe.addEventListener("mouseover", moveDiv)







function addPoints() {
  G.score.val += G.level.val * 10;
  G.update("score")
  G.points.val -= 1;
  G.update("points")
  if (G.points.val == 0) {
    addLevel()
  }
  ;
}

function addLevel() {
  G.level.val++;
  G.update("level")
  timeSecond += 10;
  G.points.val += 10;
  G.update("points")
  interval -= 50;
  moveDiv()
  duration -= 0.25;
  if (G.level.val == 6) {
    endGame()
  }

}


function missedClicksScore() {
  G.missedClicks.val += G.level.val;
  G.update("missedClicks")
}



function gameOver() {
  alert("Game over!");
  catchMe.className = "";
  catchMe.style.top = "0";
  catchMe.style.left = "0";
  clearInterval()
  duration = 0;
  catchMe.removeEventListener("mouseover", moveDiv)
  endGame()
  verifyHighScore()}




function game() {
  catchMe.addEventListener("click", addPoints),
    gameContainer.addEventListener("click", missedClicksScore)

}



catchMe.addEventListener("click", function (e) {
  e.stopPropagation()
});


function endGame() {
  catchMe.removeEventListener("mouseover", moveDiv)
  var finalScore = G.score.val - G.missedClicks.val;
  var message = `Your score is  ${finalScore}`
  catchMe.className = "";
  catchMe.style.top = "0";
  catchMe.style.left = "0";
  clearInterval()
  duration = 0;
  alert(message);
  verifyHighScore(finalScore);

}




function verifyHighScore(finalScore) {

  const lowestScore = Players[Players.length - 1].score;
  if (finalScore > lowestScore) {

    saveHighScore(finalScore);

  }




}

function saveHighScore(finalScore) {
  const fname = prompt("what's your name ") + " ";
  const date = (new Date()).toLocaleDateString('en-GB');
  const newScore = new Player(date, fname, finalScore)


  // Add to list
  Players.push(newScore);

  // Sort the list
  Players.sort((a, b) => b.score - a.score);

  // Select new list
  Players.pop();

  updateLS();
  createHTML()
}


class Player {
  constructor(_date, _fname, _score) {
    this.date = _date;
    this.fname = _fname;
    this.score = _score;
  }
}