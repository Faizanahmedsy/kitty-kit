import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";
import axios from "axios";

const spinner = ora("Loading trivia questions...").start();

// Function to fetch trivia questions
async function fetchTriviaQuestions() {
  try {
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=5&type=multiple"
    );
    return response.data.results;
  } catch (error) {
    console.error(chalk.red("Error fetching trivia questions."));
    process.exit(1);
  }
}

// Function to display the question and get user's answer
async function askQuestion(questionData, questionNumber) {
  const question = chalk.yellow(`${questionNumber}. ${questionData.question}`);
  const answers = [
    ...questionData.incorrect_answers,
    questionData.correct_answer,
  ];

  const { userAnswer } = await inquirer.prompt([
    {
      type: "list",
      name: "userAnswer",
      message: question,
      choices: answers.sort(),
    },
  ]);

  return userAnswer === questionData.correct_answer;
}

// Main function to run the trivia game
async function runTriviaGame() {
  spinner.start();
  const questions = await fetchTriviaQuestions();
  spinner.succeed("Trivia questions loaded! Let's start the quiz!");

  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    const isCorrect = await askQuestion(questions[i], i + 1);
    if (isCorrect) {
      score++;
      console.log(chalk.green("✅ Correct!"));
    } else {
      console.log(
        chalk.red("❌ Wrong! The correct answer was: ") +
          chalk.bold(questions[i].correct_answer)
      );
    }
  }

  console.log(
    chalk.blue(`\nYour final score is: ${score}/${questions.length}`)
  );
  console.log(chalk.cyan("Thank you for playing!"));
}

// Run the trivia game
runTriviaGame();
