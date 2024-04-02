#! /usr/bin/env node
import inquirer from "inquirer";
//1 computer will genrate a random number
// 2 user input for guessing number
// 3 compare user input number with generated computer guessing number and show result.
// math ka jo tool ha ye ak khas function perform karta ha ye "floor" ak 
// malik ka kam karta ha or random ak "werkear" ka kam karta ha
// or "floor" exect number deta ha or "random" points ma number deta ha
const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "pleas guess a number between 1-10: ",
    },
]);
console.log(answers);
if (answers.userGussedNumber === randomNumber) {
    console.log("congratulation! you guessed a right number.");
}
else {
    console.log("you guessed wrong number.");
}
