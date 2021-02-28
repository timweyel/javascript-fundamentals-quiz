var body = document.body;

var nav = document.createElement('nav');
body.appendChild(nav);

var backLinkEl = document.createElement('div');
backLinkEl.className = 'backLink';
var a = document.createElement('a');
var linkWords = document.createTextNode("Back to game");
a.setAttribute('style', 'text-align: left');
a.appendChild(linkWords);
a.href = "./index.html";
nav.appendChild(a);






var h1El = document.createElement('h1');
h1El.textContent = 'Name: ' + localStorage.getItem("scoreName");
body.appendChild(h1El);

var h3El = document.createElement('h3');
h3El.textContent = 'Score: ' +  localStorage.getItem("score");
body.appendChild(h3El);

var clearScoreButton = document.createElement('button');
clearScoreButton.textContent = 'Clear score!';
body.appendChild(clearScoreButton);
clearScoreButton.setAttribute('onclick', clearScore());



function getScore() {
  quizQuestionSection.innerHTML = `
  <h2>` + localStorage.getItem("scoreName") + `'s score is:</h2>
  <h1>` + localStorage.getItem("score") + `</h1><br> 
  
  <button onclick="clearScore()">Clear score!</button><button onclick="startGame()">Play Again!</button>
  
  `;
}

function clearScore() {
  localStorage.clear();

}

