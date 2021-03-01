var question = document.getElementById("questionHolder");
var answers = Array(document.getElementById("answerFill"));
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");

var questions = [
    {
      questionProp: "What does API stand for?",
      choice1: "Application Platform Interface.",
      choice2: "Application Programming Interface",
      choice3: "Authorized Programming Interface.",
      choice4: "Application Platform In-Browser",
      answer: 2
    },
    {
      questionProp:
        "What is JQuery is to JavaScript as",
      choice1: "Mother is to Daughter.",
      choice2: "Square is to Rectangle.",
      choice3: "Caluculator is to Math.",
      choice4: "In is to Out.",
      answer: 3
    },
    {
      questionProp: "How do we declare variables in Javascript?",
      choice1: "variable varName =",
      choice2: "var varName =",
      choice3: "v varName =",
      choice4: "You cannot declare variables in JavaScript",
      answer: 2
    },
    {
      questionProp: "When we want aspects of our HTML to become interactable we often add this in our JavaScript?",
      choice1: "addEventListener()",
      choice2: "addEventAction()",
      choice3: "addButtonListener()",
      choice4: "addListener()",
      answer: 1
    },
    {
      questionProp: "What is the proper way to attain a random value in JavaScript?",
      choice1: "Math.ran()",
      choice2: "random.Math()",
      choice3: "getRandom()",
      choice4: "Math.random()",
      answer: 4
    }
  ];

  function startGame () {

  };