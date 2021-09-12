const readline = require('readline-sync');
const chalk = require('chalk');


console.log(chalk.black.bgMagenta('-------------------------------------\n--------- StockMarket QUIZ ----------\n-------------------------------------'));
var score = 0;
var queAnsArray = [
  {
    question: "Stock market is also called ",
    ans1: "open market ",
    ans2: "equity market ",
    ans: "2"
  },
  {
    question: "What is done in the stock market? ",
    ans1: "trading ",
    ans2: "singing ",
    ans: "1"
  },
  {
    question: "Actual trades are based on this paradign ",
    ans1: "free economy ",
    ans2: "auction market ",
    ans: "2"
  },
  {
    question: "Who controls the capital market in India? ",
    ans1: "SEBI ",
    ans2: "RBI ",
    ans: "1"
  },
  {
    question: "When was Nifty established? ",
    ans1: "1996 ",
    ans2: "1952",
    ans: "1"
  },
  {
    question: "The first online stock exchange in India was ",
    ans1: "NSE ",
    ans2: "BSE ",
    ans: "1"
  },
  
];
console.log("\n");
console.log("Enter your nick name ");
var username = readline.question('');
console.log("Hello "+username+"!! Let's start the QUIZ\n")
for (var x = 0; x < queAnsArray.length; x++) {
  console.log(chalk.bold.black.bgGreen(queAnsArray[x].question))
  console.log(chalk.bold.black.bgGreen("1."+queAnsArray[x].ans1)+"  "+chalk.bold.black.bgGreen("2."+queAnsArray[x].ans2))
  var answer = readline.question('');
  if (answer === queAnsArray[x].ans) {
    console.log(chalk.green('Correct Answer!!'));
    score = score + 1
  }
  else {
    console.log(chalk.red('Wrong Answer!!'));
  }
  console.log("\n");
}

console.log(chalk.black.bgYellow("-------------------------------\n Your final score : " + chalk.black.bgWhite(score) + " Out of " + chalk.black.bgWhite('6') + " \n-------------------------------"));