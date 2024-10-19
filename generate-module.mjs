import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import ora from "ora"; // For spinner animations
import axios from "axios"; // For fetching quotes

// Made by Faizanahmed Saiyed
// https://faizansaiyed.vercel.app/

/**
 * Module Generator Script
 *
 * (Usage instructions omitted for brevity)
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const moduleName = process.argv[2];

if (!moduleName) {
  console.error("Please provide a module name.");
  process.exit(1);
}

const moduleFolder = moduleName.toLowerCase();

const paths = [
  `${moduleFolder}/list/${moduleName}List.tsx`,
  `${moduleFolder}/list/${moduleName}ListTable.tsx`,
  `${moduleFolder}/list/columns.tsx`,
  `${moduleFolder}/details/${moduleName}Detail.tsx`,
  `${moduleFolder}/mutate/CreateUpdate${moduleName}.tsx`,
  `${moduleFolder}/types.ts`,
];

const baseDir = __dirname;

console.log("Script directory:", baseDir);

// Function to fetch a random quote
async function fetchRandomQuote() {
  try {
    const response = await axios.get("https://api.quotable.io/random");
    return response.data.content + " — " + response.data.author;
  } catch (error) {
    console.error("Failed to fetch a quote: ", error.message);
    return "Keep coding!"; // Fallback quote
  }
}

const spinner = ora("Creating files and folders...").start();

// Function to create files with a delay
async function createFilesWithDelay() {
  for (const filePath of paths) {
    const fullPath = path.join(baseDir, filePath);
    const dir = path.dirname(fullPath);

    // Create the folder if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      spinner.succeed(`Created directory: ${dir}`);
    }

    // Create the file if it doesn't exist
    if (!fs.existsSync(fullPath)) {
      // Add a delay of 3 seconds before creating the file
      await new Promise((resolve) => setTimeout(resolve, 3000));
      fs.writeFileSync(fullPath, "");
      spinner.succeed(`Created file: ${fullPath}`);
      const quote = await fetchRandomQuote();
      console.log(`💡 Quote of the moment: "${quote}"\n`);
    }
  }
}

createFilesWithDelay()
  .then(() => {
    const asciiArt = `
*******************************************************
*                                                     *
*   _____      _                    ____ _     _       *
*  |  ___|_ _ (_)______ _ _ __     / ___| |   (_)      *
*  | |_ / _\` | | |_  / _\` | '_ \\  | |   | |   | |      *
*  |  _| (_| | | |/ / (_| | | | | | |___| |___| |      *
*  |_|  \\__,_|_|_/___\\__,_|_| |_|  \\____|_____|_|      *
*                                                     *
*    Module "${moduleName}" generated successfully!   *
*                                                     *
*                  Happy Coding! 🚀                   *
*******************************************************
`;

    console.log(asciiArt);
  })
  .catch((err) => {
    console.error("Error during file creation: ", err);
  });
