#! /usr/bin/env node
import inquirer from "inquirer";
//computer will generate a random number.
const randomNumber = Math.floor(Math.random() * 10 + 1);
//user input for guessing number.
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    },
]);
//compare both computer generated number and user input number and generate reults.
if (answers.userGuessedNumber === randomNumber) {
    console.log("Welldone! You guessed the right number.");
}
else {
    console.log("Better luck next time. You guessed the wrong number.");
}
