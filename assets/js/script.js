var questions = [{
  title: "Which method removes the first element from an array and returns that removed element. This method changes the length of the array?",
  choices: ["shift()", "unshift()", "push()", "filter()"],
  answer: "shift()"
},
{
  title: "Which method removes the last element from an array and returns that element. This method changes the length of the array?",
  choices: ["join()", "slice()", "splice()", "pop()"],
  answer: "pop()"
},
{
  title: "Which method returns a string representing the specified array and its elements?",
  choices: ["concat()", "fill()", "toString()", "flat()"],
  answer: "toString"
},
{
  title: "Which method returns true or false if every element in the specified array satisfies a condition specified in the callback function. Returns false even if single element does not satisfy the condition?",
  choices: ["forEach()", "reduce()", "map()", "every()"],
  answer: "every()"
},
{
  title: "Which method passes two elements simultaneously in the callback function (till it reaches the last element) and returns a single value?",
  choices: ["reduce()", "some()", "indexOf()", "filter()"],
  answer: "reduce()"
},
{
  title: "Which method returns a new array with specified start to end elements?",
  choices: ["slice()", "reverse()", "some()", "map()"],
  answer: "slice()"
},
{
  title: "Which method adds one or more elements to the front of an array and returns the new length of the array.",
  choices: ["splice()", "unshift()", "push()", "pop()"],
  answer: "unshift()"
},
{
  title: "Which method creates a new array with the results of calling a provided function on every element in this array.",
  choices: ["forEach()", "every()", "reduce()", "map()"],
  answer: "map()"
},
{
  title: "Which method adds and/or removes elements from an array.",
  choices: ["filter()", "splice()", "pop()", "shift()"],
  answer: "splice()"
},
{
  title: "Which method adds one or more elements at the end of an array and returns the new length of the array.",
  choices: ["shift()", "pop()", "push()", "shift()"],
  answer: 
}]

var timerEl = document.getElementById('timer');
var startButton = document.getElementById('start');



// Timer that counts down from 5
function countdown() {
  var timeLeft = 75;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
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
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}


startButton.onclick = countdown;