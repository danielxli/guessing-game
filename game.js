var counter = 0


var q1 = prompt ("Do I like snacks?")
q1 = q1.toLowerCase()
if(q1 === "yes" || q1 === "y"){
  console.log("That is correct!");
  counter++;
} else if (q1 === "no" || q1 === "n") {
  console.log("That is incorrect!");
}

console.log(counter)
var q2 = prompt ("Do I wear contacts?")
q2 = q2.toLowerCase()
if(q2 === "yes" || q2 === "y"){
  console.log("That is correct!");
  counter++;
} else if (q2 === "no" || q2 === "n") {
  console.log("That is incorrect!");
}

console.log(counter)
var q3 = prompt ("Do I have any pets?")
q3 = q3.toLowerCase()
if(q3 === "yes" || q3 === "y"){
  console.log("That is correct!");
  counter++;
} else if (q3 === "no" || q3 === "n") {
  console.log("That is incorrect!");
}

console.log(counter)
var q4 = prompt ("How old am I?")
q4 = parseInt(q4)
if(q4 > 25){
  console.log("That is too high!");
} else if (q4 < 25) {
  console.log("That is too low!");
} else if (q4 === 25) {
  console.log("That is correct!")
  counter++;
}

console.log(counter)
var q5 = prompt("For the last challenge... Guess the number I am thinking... Between 1 and 100")
var answer = Math.floor((Math.random() * 100) + 1);
while (q5 != answer) {
  if (q5 > answer) {
    var q5 = prompt("Too high. Guess again!")
  } else if (q5 < answer) {
    var q5 = prompt("Too low. Guess again!")
  }
}
console.log("Good job! You got it!")
counter++

console.log("Your final score is " + counter)
