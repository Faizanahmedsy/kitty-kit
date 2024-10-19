import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import fs from "fs";
import { setInterval, clearInterval } from "timers";

// Path to the tasks JSON file
const filePath = "todos.json";
let todos = [];

// Load existing tasks from the JSON file
const loadTodos = () => {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath);
    todos = JSON.parse(data);
  }
};

// Save tasks to the JSON file
const saveTodos = () => {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
};

// Function to display the welcome message
const welcomeMessage = () => {
  console.log(
    chalk.green(figlet.textSync("To-Do List", { horizontalLayout: "full" }))
  );
};

// Function to display the to-do list
const displayTodos = () => {
  console.clear();
  welcomeMessage();
  console.log(chalk.blue("Your To-Do List:"));

  if (todos.length === 0) {
    console.log(chalk.yellow("No tasks yet! Add some tasks to get started."));
  } else {
    todos.forEach((todo, index) => {
      const status = todo.completed ? chalk.green("[✔]") : chalk.red("[ ]");
      console.log(`${status} ${chalk.yellow(`${index + 1}. ${todo.task}`)}`);
    });
  }
};

// Function to add a new to-do item
const addTodo = async () => {
  const { task } = await inquirer.prompt([
    {
      type: "input",
      name: "task",
      message: chalk.green("What task would you like to add?"),
    },
  ]);

  todos.push({ task, completed: false });
  saveTodos();
  console.log(chalk.green(`Task "${task}" added!`));
  await pause();
};

// Function to delete a to-do item
const deleteTodo = async () => {
  if (todos.length === 0) {
    console.log(chalk.red("No tasks to delete!"));
    await pause();
    return;
  }

  const { index } = await inquirer.prompt([
    {
      type: "input",
      name: "index",
      message: chalk.red("Which task number would you like to delete?"),
    },
  ]);

  const taskIndex = parseInt(index) - 1;

  if (taskIndex >= 0 && taskIndex < todos.length) {
    const removedTask = todos.splice(taskIndex, 1);
    saveTodos();
    console.log(chalk.green(`Task "${removedTask[0].task}" deleted!`));
  } else {
    console.log(chalk.red("Invalid task number!"));
  }

  await pause();
};

// Function to mark a task as complete
const markComplete = async () => {
  if (todos.length === 0) {
    console.log(chalk.red("No tasks to mark as complete!"));
    await pause();
    return;
  }

  const { index } = await inquirer.prompt([
    {
      type: "input",
      name: "index",
      message: chalk.cyan(
        "Which task number would you like to mark as complete?"
      ),
    },
  ]);

  const taskIndex = parseInt(index) - 1;

  if (taskIndex >= 0 && taskIndex < todos.length) {
    todos[taskIndex].completed = true;
    saveTodos();
    console.log(
      chalk.green(`Task "${todos[taskIndex].task}" marked as complete!`)
    );
  } else {
    console.log(chalk.red("Invalid task number!"));
  }

  await pause();
};

// Function to clear completed tasks
const clearCompleted = async () => {
  todos = todos.filter((todo) => !todo.completed);
  saveTodos();
  console.log(chalk.green("All completed tasks have been cleared!"));
  await pause();
};

// Function to pause before returning to the main menu
const pause = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

// Main function to display the menu and handle user input
const mainMenu = async () => {
  loadTodos();

  while (true) {
    displayTodos();

    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: chalk.cyan("Choose an action:"),
        choices: [
          "Add Task",
          "Delete Task",
          "Mark Task as Complete",
          "Clear Completed Tasks",
          "Exit",
        ],
      },
    ]);

    if (action === "Add Task") {
      await addTodo();
    } else if (action === "Delete Task") {
      await deleteTodo();
    } else if (action === "Mark Task as Complete") {
      await markComplete();
    } else if (action === "Clear Completed Tasks") {
      await clearCompleted();
    } else {
      console.log(chalk.green("Goodbye!"));
      break;
    }
  }
};

// Start the application
welcomeMessage();
mainMenu();
