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