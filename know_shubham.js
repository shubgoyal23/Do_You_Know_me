var readlineSync = require("readline-sync");
var score = 0;
console.log("Welcome to how well you know Shubham The Game\nFor Every Correct answer you will be rewarded 1 Point");
console.log("\n**************************\n");

var userName = readlineSync.question("Enter Your Name: ");
var highscore = ["shubham"]

const questionsAboutShubham = [
  {
    question: "Is Shubham currently living in the same city he was born in?",
    answer: "Yes"
  },
  {
    question: "Has Shubham ever traveled to another country?",
    answer: "no"
  },
  {
    question: "Does Shubham enjoy outdoor activities such as hiking or camping?",
    answer: "Yes"
  },
  {
    question: "Has Shubham ever been skydiving or done any extreme sports?",
    answer: "No"
  },
  {
    question: "Is music an important part of Shubham's life?",
    answer: "no"
  },
  {
    question: "Does Shubham have any pets?",
    answer: "No"
  },
  {
    question: "Has Shubham ever held a leadership position in a club or organization?",
    answer: "Yes"
  },
  {
    question: "Does Shubham enjoy cooking or trying out new recipes?",
    answer: "Yes"
  },
  {
    question: "Has Shubham ever published any written work, such as a blog or a book?",
    answer: "yes"
  },
  {
    question: "Is Shubham a morning person who prefers to wake up early?",
    answer: "yes"
  }
];

for (i = 0; i < questionsAboutShubham.length; i++) {
  var useranswer = readlineSync.question(questionsAboutShubham[i].question + " -> ");
  if (useranswer.toUpperCase() == questionsAboutShubham[i].answer.toUpperCase()) {
    score++;
    console.log("correct Answer\nYour current score is " + score);
    console.log("\n**************************\n");
  } else {
    console.log("Wrong Answer\nThe correct answer is " + questionsAboutShubham[i].answer + "\nYour current score is " + score);
    console.log("\n**************************\n");
  }
}
// printing final score and storing data
if (score > 8) {
  console.log("You Won, You are Pro Your Name is Given for top Scprer list\nYour Final score is " + score);
  highscore.push(userName);
}
else if (score > 6 && score <= 8) {
  console.log("You Won\nYour Final score is " + score);
}
else if (score > 4 && score <= 6) {
  console.log("You Need to know more\nYour Final score is " + score);
}
else {
  console.log("You Don't know anything about Shubham\nYour Final score is " + score);
}

console.log("High scorer list " + highscore);

