var questionsArray = [{
  question: "Which method removes the first element from an array and returns that removed element? This method changes the length of the array.",
  choices: ["shift()", "unshift()", "push()", "filter()"],
  answer: "shift()"
},
{
  question: "Which method removes the last element from an array and returns that element? This method changes the length of the array.",
  choices: ["join()", "slice()", "splice()", "pop()"],
  answer: "pop()"
},
{
  question: "Which method returns a string representing the specified array and its elements?",
  choices: ["concat()", "fill()", "toString()", "flat()"],
  answer: "toString"
},
{
  question: "Which method returns true or false if every element in the specified array satisfies a condition specified in the callback function. Returns false even if single element does not satisfy the condition?",
  choices: ["forEach()", "reduce()", "map()", "every()"],
  answer: "every()"
},
{
  question: "Which method passes two elements simultaneously in the callback function (till it reaches the last element) and returns a single value?",
  choices: ["reduce()", "some()", "indexOf()", "filter()"],
  answer: "reduce()"
},
{
  question: "Which method returns a new array with specified start to end elements?",
  choices: ["slice()", "reverse()", "some()", "map()"],
  answer: "slice()"
},
{
  question: "Which method adds one or more elements to the front of an array and returns the new length of the array.",
  choices: ["splice()", "unshift()", "push()", "pop()"],
  answer: "unshift()"
},
{
  question: "Which method creates a new array with the results of calling a provided function on every element in this array.",
  choices: ["forEach()", "every()", "reduce()", "map()"],
  answer: "map()"
},
{
  question: "Which method adds and/or removes elements from an array.",
  choices: ["filter()", "splice()", "pop()", "shift()"],
  answer: "splice()"
},
{
  question: "Which method adds one or more elements at the end of an array and returns the new length of the array.",
  choices: ["shift()", "pop()", "push()", "shift()"],
  answer: "push()"
}];

// functions needed to:
// start the game/timer
// loop through questions
// subtract time when there's an incorrect answer
// end the game when time runs out
  // what if all questions answered before time runs out?
// restart the game
// add the score?
// view the highscores?

var body = document.body;
var countdown;
var currentQuestion = -1;


var timerEl = document.getElementById("timer");
var quizBodyEl = document.querySelector("quizBody");

var choicesEl = document.createElement("choice-button");


// Timer that counts down from 75
function startGame() {
  var timeLeft = 15;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  countdown = setInterval(function() {
    //
    // YOUR CODE HERE
    //
   if (timeLeft > 1) {
      timerEl.textContent = `${timeLeft} seconds remaining`;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = `${timeLeft} second remaining`;
      timeLeft--;
    } else {
      timerEl.textContent = '';
      endGame();
    }
  }, 1000);
  nextQuestion();
};

var startButton = document.getElementById("start");
startButton.onclick = startGame;


//stops the timer and game ends
function endGame() {
  clearInterval(countdown);

  var h2endGame = document.createElement('h2');
  h2endGame.textContent = 'Game Over';
  body.appendChild(h2endGame);
}

//loop through questions
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion > questionsArray.length - 1) {
    endGame();
    return;
  }

  //displays the current question
  var displayedQuestion = document.createElement('div');
  displayedQuestion.textContent = questionsArray[currentQuestion].question;
  body.appendChild(displayedQuestion);

  //loops through the question choices and creates buttons for the choices
  for (var i = 0; i < questionsArray[currentQuestion].choices.length; i++) {
    var choiceButton = document.createElement('button');
    choiceButton.textContent = questionsArray[currentQuestion].choices[i];
    body.appendChild(choiceButton);
    
    answerSelected = choiceButton.setAttribute("onclick", questionsArray[currentQuestion].choices[i]);
  }

}

function isCorrect(answerSelected) {
  // choice correct?
  if (answerSelected !== questionsArray[currentQuestion].answer) {
    this.timeLeft -= 10;
  } else {
    this.timeLeft +=100;
  }
}

quizBodyEl.addEventListener("click", isCorrect);