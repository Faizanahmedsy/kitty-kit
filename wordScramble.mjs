import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";

// List of words for the game
const words = [
  "javascript",
  "nodejs",
  "react",
  "typescript",
  "programming",
  "developer",
  "algorithm",
];

// Function to scramble a word
const scrambleWord = (word) => {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

// Main function to run the word scramble game
async function runWordScrambleGame() {
  const spinner = ora("Choosing a word...").start();

  const originalWord = words[Math.floor(Math.random() * words.length)];
  const scrambledWord = scrambleWord(originalWord);
  spinner.succeed(
    `Word chosen! Unscramble this: ${chalk.yellow(scrambledWord)}`
  );

  let attempts = 0;
  let guessed = false;

  console.log(chalk.blue("Welcome to the Word Scramble Game!"));

  while (!guessed) {
    const { guess } = await inquirer.prompt([
      {
        type: "input",
        name: "guess",
        message: chalk.yellow("Enter your guess:"),
      },
    ]);

    attempts++;

    if (guess.toLowerCase() === originalWord) {
      guessed = true;
      console.log(
        chalk.magenta(
          `🎉 Congratulations! You've unscrambled the word "${originalWord}" in ${attempts} attempts!`
        )
      );
    } else {
      console.log(chalk.red(`❌ Incorrect! Try again.`));
    }
  }

  console.log(chalk.cyan("Thanks for playing! Would you like to play again?"));
}

// Run the word scramble game
runWordScrambleGame();
