var questionsArray = [{
  question: "Which method removes the first element from an array and returns that removed element? This method changes the length of the array.",
  choices: ["shift( )", "unshift( )", "push( )", "filter( )"],
  answer: "shift( )"
},
{
  question: "Which method removes the last element from an array and returns that element? This method changes the length of the array.",
  choices: ["join( )", "slice( )", "splice( )", "pop( )"],
  answer: "pop( )"
},
{
  question: "Which method returns a string representing the specified array and its elements?",
  choices: ["concat( )", "fill( )", "toString( )", "flat( )"],
  answer: "toString( )"
},
{
  question: "Which method returns true or false if every element in the specified array satisfies a condition specified in the callback function. Returns false even if single element does not satisfy the condition?",
  choices: ["forEach( )", "reduce( )", "map( )", "every( )"],
  answer: "every( )"
},
{
  question: "Which method passes two elements simultaneously in the callback function (till it reaches the last element) and returns a single value?",
  choices: ["reduce( )", "some( )", "indexOf( )", "filter( )"],
  answer: "reduce( )"
},
{
  question: "Which method returns a new array with specified start to end elements?",
  choices: ["slice( )", "reverse( )", "some( )", "map( )"],
  answer: "slice( )"
},
{
  question: "Which method adds one or more elements to the front of an array and returns the new length of the array.",
  choices: ["splice( )", "unshift( )", "push( )", "pop( )"],
  answer: "unshift( )"
},
{
  question: "Which method creates a new array with the results of calling a provided function on every element in this array.",
  choices: ["forEach( )", "every( )", "reduce( )", "map( )"],
  answer: "map( )"
},
{
  question: "Which method adds and/or removes elements from an array.",
  choices: ["filter( )", "splice( )", "pop( )", "shift( )"],
  answer: "splice( )"
},
{
  question: "Which method adds one or more elements at the end of an array and returns the new length of the array.",
  choices: ["shift( )", "pop( )", "push( )", "shift( )"],
  answer: "push( )"
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
var h1El = document.createElement('h1');
h1El.textContent = "JavaScript Fundamentals Quiz!"
body.appendChild(h1El);

var h3El = document.createElement('h3');
h3El.textContent = "Click Start to Play!";
body.appendChild(h3El);

var startButton = document.createElement('button');
startButton.textContent = "Start!";
body.appendChild(startButton);

var timerEl = document.getElementById("timer");
var choicesEl = document.createElement("choice-button");

var quizQuestion = document.createElement('h2');
var choice1 = document.createElement('button');
var choice2 = document.createElement('button');
var choice3 = document.createElement('button');
var choice4 = document.createElement('button');

var countdown;
var currentQuestion = -1;


// Timer that counts down from 75
function startGame() {
  var timeLeft = 5;

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

startButton.onclick = startGame;


//stops the timer and game ends
function endGame() {
  clearInterval(countdown);

  var quizBody = 
  `
  <h2>Game Over</h2>
  <h3>put the score here</h3>
  <input type = "text" id="name" placeholder = "Initials"></input>
  <button onclick="setScore()">Submit Score</button>
  `;

  document.getElementById("quizMessage").innerHTML = quizBody;
}

//loop through questions
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion > questionsArray.length - 1) {
    endGame();
    return;
  }
    
  //removes start message
  /*h1El.body.removeChild(h1El);
  h3El.body.removeChild(h3El);
  startButton.body.removeChild(startButton);*/
  h1El = body.removeChild(h1El);
  h3El = body.removeChild(h3El);
  startButton = body.removeChild(startButton);

  //displays the current question
  quizQuestion.textContent = questionsArray[currentQuestion].question;
  body.appendChild(quizQuestion);

  //displays the current question's choices
  choice1.textContent = questionsArray[currentQuestion].choices[0];
  choices.appendChild(choice1);

  //TODO: I think I need to use setAttribute and set the 'value' so it gets passed to the eventhandler
  choice2.textContent = questionsArray[currentQuestion].choices[1];
  choices.appendChild(choice2);
  choice3.textContent = questionsArray[currentQuestion].choices[2];
  choices.appendChild(choice3);
  choice4.textContent = questionsArray[currentQuestion].choices[3];
  choices.appendChild(choice4);

  //TODO: add eventhandlers here to compare choice to answer


/*
function isCorrect() {
  // choice correct?
  if (this.value !== questionsArray[currentQuestion].answer) {
    this.timeLeft -= 10;
  } else {
    this.timeLeft +=100;
  }
}
*/

//quizBodyEl.addEventListener("click", isCorrect);
