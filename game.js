var ans1 = document.getElementById('a1');
var ans2 = document.getElementById('a2');
var ans3 = document.getElementById('a3');
var ans4 = document.getElementById('a4');
var ans5 = document.getElementById('a5');


var questions = ["Do I like snacks?", "Do I wear contacts?", "Do I have any pets?", "How old am I?", "For the last challenge... Guess the number I am thinking... Between 1 and 100"];
var answers = ["yes", "yes", "yes", 25, Math.floor((Math.random() * 100) + 1)];


var counter = 0;

var userName = prompt("Hey!!!! What\'s your name?");
var welcomeMessage = document.getElementById('welcome');
welcomeMessage.textContent = "Hello and welcome to the guessing game, " + userName + "!";

function game(question, answer) {
  var ques = prompt(question).toLowerCase();

  if (answer === ques) {
    counter++;
    alert("That is correct");
  } else {
    alert("That is incorrect");
  }
}

for (var i = 0; i < questions.length; i++ ) {
  console.log("Here's the answer to question " + (i+1)  + ": " + answers[i]);
  game(questions[i], answers[i]);

}


// var q1 = prompt ("Do I like snacks?").toLowerCase()
// if(q1 === "yes" || q1 === "y"){
//   alert("That is correct!");
//   counter++;
// } else if (q1 === "no" || q1 === "n") {
//   alert("That is incorrect!");
// }
//
// alert("Your current score is: " + counter)
// var q2 = prompt ("Do I wear contacts?").toLowerCase()
// if(q2 === "yes" || q2 === "y"){
//   alert("That is correct!");
//   counter++;
// } else if (q2 === "no" || q2 === "n") {
//   alert("That is incorrect!");
// }
//
// alert("Your current score is: " + counter)
// var q3 = prompt ("Do I have any pets?").toLowerCase()
// if(q3 === "yes" || q3 === "y"){
//   alert("That is correct!");
//   counter++;
// } else if (q3 === "no" || q3 === "n") {
//   alert("That is incorrect!");
// }
//
// alert("Your current score is: " + counter)
// var q4 = parseInt(prompt("How old am I?"))
// if(q4 > 25){
//   alert("That is too high!");
// } else if (q4 < 25) {
//   alert("That is too low!");
// } else if (q4 === 25) {
//   alert("That is correct!")
//   counter++;
// }
//
// alert("Your current score is: " + counter)
// var q5 = parseInt(prompt("For the last challenge... Guess the number I am thinking... Between 1 and 100"))
// var answer = Math.floor((Math.random() * 100) + 1);
// while (q5 !== answer) {
//   if (q5 > answer) {
//     var q5 = prompt("Too high. Guess again!")
//   } else if (q5 < answer) {
//     var q5 = prompt("Too low. Guess again!")
//   }
// }
// alert("Good job! You got it!")
// counter++
//
// alert("Your final score is " + counter)
