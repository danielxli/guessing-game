var questions = ["Do I like snacks?", "Do I wear contacts?", "Do I have any pets?", "How old am I?", "For the last challenge... Guess the number I am thinking... Between 1 and 100"]
var answers = ["yes", "yes", "yes", 25, Math.floor((Math.random() * 100) + 1)]


var counter = 0

var userName = prompt("Hello and welcome to my game!\n What\'s your name?");
alert("Hi, " + userName + ".\n Answer these questions about me as best you can!!");


function game(question, answer) {
  var ques = prompt(question).toLowerCase();

  if (answer === ques) {
    counter++;
    alert("That is correct")
  } else {
    alert("That is incorrect")
  }
}

for (var i = 0; i < questions.length; i++ ) {
  console.log("Here's the answer ;)     " + answers[i])
  game(questions[i], answers[i])

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
