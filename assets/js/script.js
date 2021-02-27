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

var nav = document.createElement('nav');
body.appendChild(nav);

var highscoresEl = document.createElement('div');
highscoresEl.className = "highscores";
highscoresEl.textContent = 'Highscores';
nav.appendChild(highscoresEl);

var timerEl = document.createElement('div');
timerEl.className = "timer";
timerEl.textContent = 'Time Left: 75 seconds';
nav.appendChild(timerEl);

// var introContainer = document.createElement('div');
// introContainer.setAttribute('class', 'intro-container');
// body.appendChild.introContainer;

var h1El = document.createElement('h1');
h1El.textContent = "JavaScript Fundamentals Quiz!"
body.appendChild(h1El);

var h3El = document.createElement('h3');
h3El.textContent = "Click Start to Play!";
body.appendChild(h3El);

var startButton = document.createElement('button');
startButton.textContent = "Start!";
body.appendChild(startButton);

var quizQuestionSection = document.createElement('div');
var quizQuestionText = document.createElement('h2');

var choice1 = document.createElement('button');
var choice2 = document.createElement('button');
var choice3 = document.createElement('button');
var choice4 = document.createElement('button');


//function variables
var countdown;
var currentQuestion = -1;
var score = 0;
var timeLeft = 75;


startButton.onclick = startGame;

// Timer that counts down from 75
function startGame() {
  

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  countdown = setInterval(function() {
    //
    // YOUR CODE HERE
    //
   if (timeLeft > 1) {
      timerEl.textContent = `Time left: ${timeLeft} seconds`;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = `Time left: ${timeLeft} second`;
      timeLeft--;
    } else {
      timerEl.textContent = '';
      endGame();
    }
  }, 1000);

  startButton = body.removeChild(startButton);
  h1El = body.removeChild(h1El);
  h3El = body.removeChild(h3El);
  nextQuestion();
};




//stops the timer and game ends
function endGame() {
  clearInterval(countdown);
/*
  var quizBody = 
  `
  <h2>Game Over</h2>
  <h3>put the score here</h3>
  <input type = "text" id="name" placeholder = "Initials"></input>
  <button onclick="setScore()">Submit Score</button>
  `;

  document.getElementById("quizQuestionSection").innerHTML = quizBody;
*/
}

//loop through questions
function nextQuestion() {
  console.log('current Q', currentQuestion);
  console.log('score', score);
  currentQuestion += 1;

  if (currentQuestion > questionsArray.length - 1) {
    endGame();
    return;
  }

  // h1El = body.removeChild(h1El);
  // h3El = body.removeChild(h3El);
  displayQuestion();
}

//displays the current question
function displayQuestion() {
  quizQuestionSection.className = 'quizSection';
  body.appendChild(quizQuestionSection)
  
  quizQuestionSection.appendChild(quizQuestionText);
  quizQuestionText.textContent = questionsArray[currentQuestion].question;

  displayChoices();
}

//displays the current question's choices
function displayChoices() {

  var choicesEl = document.createElement('div');
  quizQuestionSection.appendChild(choicesEl);
  
  //creates the buttons for choices
  //choice1
  choice1.textContent = questionsArray[currentQuestion].choices[0];
  choice1.setAttribute('value', questionsArray[currentQuestion].choices[0]);
  choice1.id = 'choice1';
  choicesEl.appendChild(choice1);
  
  //choice2
  choice2.textContent = questionsArray[currentQuestion].choices[1];
  choice2.setAttribute('value', questionsArray[currentQuestion].choices[1]);
  choice2.id = 'choice2';
  choicesEl.appendChild(choice2);

  //choice3
  choice3.textContent = questionsArray[currentQuestion].choices[2];
  choice3.setAttribute('value', questionsArray[currentQuestion].choices[2]);
  choice3.id = 'choice3';
  choicesEl.appendChild(choice3);

  //choice4
  choice4.textContent = questionsArray[currentQuestion].choices[3];
  choice4.setAttribute('value', questionsArray[currentQuestion].choices[3]);
  choice4.id = 'choice4';
  choicesEl.appendChild(choice4);

  choice1.addEventListener('click', function() {
    if (choice1.value !== questionsArray[currentQuestion].answer) {
      timeLeft -= 10;
    } else {
      score += 20;
    }    
    console.log('choice1 selected', choice1);
    nextQuestion()
  });
  
  choice2.addEventListener('click', function() {
    if (choice2.value !== questionsArray[currentQuestion].answer) {
      timeLeft -= 10;
    } else {
      score += 20;
    }
    console.log('choice2 selected', choice2);
    nextQuestion()
  });

  choice3.addEventListener('click', function() {
    if (choice3.value !== questionsArray[currentQuestion].answer) {
      timeLeft -= 10;
    } else {
      score += 20;
    }
    console.log('choice3 selected', choice3);
    nextQuestion()
  });

  choice4.addEventListener('click', function() {
    if (choice4.value !== questionsArray[currentQuestion].answer) {
      timeLeft -= 10;
    } else {
      score += 20;
    }
    console.log('choice4 selected', choice4);
 
    // quizQuestionSection = body.div.h2.removeChild(quizQuestionSection);
    // quizQuestionSection = body.div.removeChild(choicesEl);
    nextQuestion();


    
  });

  
}


