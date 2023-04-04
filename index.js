var readlineSync = require("readline-sync");

console.log("if u are a cricket fan then take this quiz to test your knowledge");

var score = 0;

var name = readlineSync.question("what is your name :");
console.log("welcome " + name + " lets start and your current score is = 0");

var array = [
  {
    q: " 1 What are the small pieces of wood on top of the stumps called?",
    ans: "bails"
  },
  {
    q: "2 Which International team is nicknamed the Baggy Greens?",
    ans: "australia"
  },
  {
    q: "3 Harold 'Dickie' Bird is a famous...?",
    ans: "umpire"
  },
  {
    q: "4 Where did cricket originate?",
    ans: "england"
  },
  {
    q: "5 Which of these places is cricket NOT a popular sport? (india,pakistan,west indies,myanmar) ",
    ans: "myanmar"
  }

]

function quiz( ra, ua) {
  if (ra.toUpperCase() === ua.toUpperCase()) {
    score += 10;
    console.log("Right!")
    console.log("current score " + score);
    console.log("------------");
  }
  else {
    console.log("wrong!! ")
    console.log("Right ans is " + ra);
    console.log("current score " + score);
    console.log("------------");
  }
}

for (let i = 0; i < array.length; i++) {

  console.log(array[i].q);
  var userA = readlineSync.question("");
  quiz(array[i].ans, userA);
}

console.log("YAY!!! you scored: " + score);
console.log("Checkout the high score,if u scored more than this in first try send me SS ,i will update your name here  ")

var highScores = [
  {
    name: "motu",
    score:20
  },
  {
    name: "patlu",
    score:10
  }
    ]

highScores.map( function showHighScore(object){
  console.log(object.name +" : "+ object.score);
})
