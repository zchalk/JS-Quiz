var question = document.getElementById("questionText");
var answers = document.querySelectorAll(".answerFill");
console.log(answers);
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var score = 0;
var interval = 0;
var secondCounter = document.getElementById("timer");
var seconds = 60;
var questionTracker = 0;

var possibleQuestions = [
    {
      questionIOP: "What does API stand for?",
      answers0: "Application Platform Interface.",
      answers1: "Application Programming Interface",
      answers2: "Authorized Programming Interface.",
      answers3: "Application Platform In-Browser",
      correctAnswer: 1
    },
    {
      questionIOP:"What is JQuery is to JavaScript as",
      answers0: "Mother is to Daughter.",
      answers1: "Square is to Rectangle.",
      answers2: "Caluculator is to Math.",
      answers3: "In is to Out.",
      correctAnswer: 2
    },
    {
      questionIOP: "How do we declare variables in Javascript?",
      answers0: "variable varName =",
      answers1: "var varName =",
      answers2: "v varName =",
      answers3: "You cannot declare variables in JavaScript",
      correctAnswer: 1
    },
    {
      questionIOP: "When we want aspects of our HTML to become interactable we often add this in our JavaScript?",
      answers0: "addEventListener()",
      answers1: "addEventAction()",
      answers2: "addButtonListener()",
      answers3: "addListener()",
      correctAnswer: 0
    },
    {
      questionIOP: "What is the proper way to attain a random value in JavaScript?",
      answers0: "Math.ran()",
      answers1: "random.Math()",
      answers2: "getRandom()",
      answers3: "Math.random()",
      correctAnswer: 3
    }
  ];

  function startGame () {
    startTimer();
    askQuestions();
  };
  startGame();

  function startTimer() {
   interval= window.setInterval(function() {
    seconds--;
    if (seconds < 0) {
      window.clearInterval(interval);
      window.alert ("Time is Up!");
    } else {
      secondCounter.textContent = seconds; 
    }
    }, 1000)
  };

  function askQuestions() {
    question.textContent = possibleQuestions[questionTracker].questionIOP;
    console.log(questionTracker);
    for (let i = 0; i < answers.length; i++) {
      answers[i].textContent = possibleQuestions[questionTracker]["answers" + i]
    }
  };

  for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", function(event) {

  console.log("click");
  var chosenAnswer = event.target;
  var chosenAnswerNumber = chosenAnswer.dataset.index;
  console.log(chosenAnswerNumber);

  if (chosenAnswerNumber == possibleQuestions[questionTracker].correctAnswer) {
    score++;
    console.log(score);
    scoreEl.textContent=score;
  }
  if (questionTracker == 4) {
    window.clearInterval(interval);
    score = seconds+score;
    scoreEl.textContent=score;
    localStorage.setItem('lastGameScore', score);
    return window.location.assign("end.html");
  } 
  else {
  questionTracker++;
  askQuestions(); 
}
})};
