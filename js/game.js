var ans1 = document.getElementById('a1');
var ans2 = document.getElementById('a2');
var ans3 = document.getElementById('a3');
var ans4 = document.getElementById('a4');
var ans5 = document.getElementById('a5');
var ans6 = document.getElementById('a6');
var results = [ans1, ans2, ans3, ans4, ans5, ans6];

var questions = [
  "Do I like snacks?",
  "Do I wear contacts?",
  "Do I have any pets?",
  "How old am I?",
  "For the last challenge... Guess the number I am thinking... Between 1 and 100",
  "What are my favourite colours?"
];

var answers = [
  ["yes", 'y'],
  ["yes", 'y'],
  ["yes", 'y'],
  [25],
  [Math.floor((Math.random() * 100) + 1)],
  ["blue","mauve","periwinkle"]
];

var submissions = [];
var counter = 0;

var userName = prompt("Hey!!!! What\'s your name?");
var welcomeMessage = document.getElementById('welcome');
welcomeMessage.textContent = "Hello and welcome to the guessing game, " + userName + "!";

var statusMessage = document.getElementById('status');
statusMessage.textContent = "Get ready for your first question...";

function game(question, answer) {
  var ques = prompt(question).toLowerCase();
  submissions.push(ques)

  for (var i = 0 ;i < answer.length; i++) {
    if (answer[i] === ques || answer[i] === parseInt(ques)) {
      counter++;
      statusMessage.textContent = "Nice! That is correct \n Your score is : " + counter;
      welcomeMessage.textContent = "";
      i = answer.length
    } else if (i === answer.length - 1 ){
      statusMessage.textContent = "Aww... That is incorrect \n Your score is : " + counter;
    }
  }
}

function display (questionNumber,questionAsked,answerArray,submissionReceived) {
  var show = "Question " + questionNumber + " was '" + questionAsked + "' Acceptable answers were: '" + answerArray + ".' You said the answer was '" + submissionReceived + ".'"
  return show
}

for (var i = 0; i < questions.length; i++ ) {
  console.log("Here's the answer to question " + (i+1)  + ": " + answers[i]);
  game(questions[i], answers[i]);
  results[i].textContent = display(i+1,questions[i],answers[i],submissions[i])
}
