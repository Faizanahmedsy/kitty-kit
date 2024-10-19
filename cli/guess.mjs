import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";

// Function to generate a random number
const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Main function to run the guessing game
async function runGuessingGame() {
  const spinner = ora("Generating a random number...").start();

  const min = 1;
  const max = 100;
  const secretNumber = generateRandomNumber(min, max);
  spinner.succeed("Random number generated! (It's between 1 and 100)");

  let attempts = 0;
  let guessed = false;

  console.log(chalk.blue("Welcome to the Guess the Number Game!"));

  while (!guessed) {
    const { guess } = await inquirer.prompt([
      {
        type: "input",
        name: "guess",
        message: chalk.yellow("Enter your guess:"),
        validate: (input) => {
          const number = Number(input);
          return !isNaN(number) && number >= min && number <= max
            ? true
            : `Please enter a number between ${min} and ${max}.`;
        },
      },
    ]);

    attempts++;
    const guessNumber = Number(guess);

    if (guessNumber < secretNumber) {
      console.log(chalk.red("🔽 Too low! Try again."));
    } else if (guessNumber > secretNumber) {
      console.log(chalk.green("🔼 Too high! Try again."));
    } else {
      guessed = true;
      console.log(
        chalk.magenta(
          `🎉 Congratulations! You've guessed the number ${secretNumber} in ${attempts} attempts!`
        )
      );
    }
  }

  console.log(chalk.cyan("Thanks for playing! Would you like to play again?"));
}

// Run the guessing game
runGuessingGame();
