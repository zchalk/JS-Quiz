var question = document.getElementById("questionText");
var answers = document.querySelectorAll(".answerFill");
console.log(answers);
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var interval;
var secondCounter = document.getElementById("timer");
var seconds = 60;
var questionTracker = 0;

var possibleQuestions = [
    {
      questionProp: "What does API stand for?",
      choice0: "Application Platform Interface.",
      choice1: "Application Programming Interface",
      choice2: "Authorized Programming Interface.",
      choice3: "Application Platform In-Browser",
      answer: 1
    },
    {
      questionProp:"What is JQuery is to JavaScript as",
      choice0: "Mother is to Daughter.",
      choice1: "Square is to Rectangle.",
      choice2: "Caluculator is to Math.",
      choice3: "In is to Out.",
      answer: 2
    },
    {
      questionProp: "How do we declare variables in Javascript?",
      choice0: "variable varName =",
      choice1: "var varName =",
      choice2: "v varName =",
      choice3: "You cannot declare variables in JavaScript",
      answer: 1
    },
    {
      questionProp: "When we want aspects of our HTML to become interactable we often add this in our JavaScript?",
      choice0: "addEventListener()",
      choice1: "addEventAction()",
      choice2: "addButtonListener()",
      choice3: "addListener()",
      answer: 0
    },
    {
      questionProp: "What is the proper way to attain a random value in JavaScript?",
      choice0: "Math.ran()",
      choice1: "random.Math()",
      choice2: "getRandom()",
      choice3: "Math.random()",
      answer: 3
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
    question.textContent = possibleQuestions[questionTracker].questionProp;
    console.log(questionTracker);
    for (let i = 0; i < answers.length; i++) {
      answers[i].textContent = possibleQuestions[questionTracker]["choice" + i]
    }
  };

  for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", checkAnswer)
  }
function checkAnswer() {
  console.log("click");
  questionTracker++;
  askQuestions();
};
