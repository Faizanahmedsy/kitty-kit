import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Made by Faizanahmed Saiyed
// https://faizansaiyed.vercel.app/

/**
 * Module Generator Script
 *
 * This script generates a predefined set of files and folders for a new module
 * in your project. It can be customized based on your preferred project structure.
 *
 * USAGE INSTRUCTIONS:
 * 1. Save this script as `generate-module.js` or `generate-module.mjs` (for ES Modules)
 *    in the root directory of your project.
 *
 * 2. Add the following command to the `scripts` section of your `package.json`:
 *    For CommonJS:
 *      "generate": "node generate-module.js"
 *    For ES Modules:
 *      "generate": "node --experimental-modules generate-module.mjs"
 *
 * 3. Run the script using the command:
 *    npm run generate ModuleName
 *    Replace `ModuleName` with the desired name for your new module (e.g., "User").
 *
 * NOTE:
 * - The generated folders and files will be created in the same directory as the script.
 * - You can manually move the generated folders/files to your preferred directory structure.
 * - Feel free to modify the predefined paths and structures in the `paths` array
 *   according to your project's requirements.
 *
 * EXAMPLES OF GENERATED FILES:
 * - list/UserList.tsx
 * - details/UserDetail.tsx
 * - mutate/CreateUpdateUser.tsx
 * - types.ts
 *
 * You can customize the `paths` variable to match various project structures,
 * such as:
 * - Full-Stack Project Structure
 * - Frontend Component Structure
 * - Backend API Structure
 * - And many more (see commented sections below).
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

// Full-Stack Project Structure
// const paths = [
//   `${moduleFolder}/shared/types/${moduleName}Types.ts`,
//   `${moduleFolder}/shared/interfaces/${moduleName}Interface.ts`,
//   `${moduleFolder}/config/${moduleName}Config.ts`,
//   `${moduleFolder}/config/${moduleName}Env.ts`,
//   `${moduleFolder}/tests/${moduleName}Service.test.ts`,
//   `${moduleFolder}/tests/${moduleName}Controller.test.ts`,
// ];

// Frontend Component Structure
// const paths = [
//   `${moduleFolder}/components/${moduleName}.tsx`,
//   `${moduleFolder}/components/${moduleName}Header.tsx`,
//   `${moduleFolder}/components/${moduleName}Footer.tsx`,
//   `${moduleFolder}/components/${moduleName}Card.tsx`,
// ];

// Frontend Hooks
// const paths = [
//   `${moduleFolder}/hooks/use${moduleName}.ts`,
//   `${moduleFolder}/hooks/use${moduleName}Details.ts`,
// ];

// Frontend Context Providers
// const paths = [
//   `${moduleFolder}/context/${moduleName}Context.tsx`,
//   `${moduleFolder}/context/${moduleName}Provider.tsx`,
// ];

// Backend API Structure
// const paths = [
//   `${moduleFolder}/routes/${moduleName}Routes.ts`,
//   `${moduleFolder}/controllers/${moduleName}Controller.ts`,
//   `${moduleFolder}/models/${moduleName}Model.ts`,
//   `${moduleFolder}/services/${moduleName}Service.ts`,
// ];

// Backend Utility Functions
// const paths = [
//   `${moduleFolder}/utils/${moduleName}Helper.ts`,
//   `${moduleFolder}/utils/${moduleName}Validator.ts`,
// ];

// Database Migrations/Seeds
// const paths = [
//   `${moduleFolder}/database/migrations/${moduleName}Migration.ts`,
//   `${moduleFolder}/database/seeds/${moduleName}Seed.ts`,
// ];

// Feature-Based Structure
// const paths = [
//   `${moduleFolder}/feature/${moduleName}/index.tsx`,
//   `${moduleFolder}/feature/${moduleName}/styles.module.css`,
//   `${moduleFolder}/feature/${moduleName}/hooks.ts`,
// ];

// GraphQL Structure
// const paths = [
//   `${moduleFolder}/graphql/resolvers/${moduleName}Resolver.ts`,
//   `${moduleFolder}/graphql/schemas/${moduleName}Schema.ts`,
//   `${moduleFolder}/graphql/loaders/${moduleName}Loader.ts`,
// ];

// Serverless Functions
// const paths = [
//   `${moduleFolder}/lambdas/${moduleName}Function.ts`,
//   `${moduleFolder}/lambdas/${moduleName}Handler.ts`,
// ];

// Microservices Architecture
// const paths = [
//   `${moduleFolder}/microservices/${moduleName}/handlers.ts`,
//   `${moduleFolder}/microservices/${moduleName}/models.ts`,
// ];

// CLI Tool Structure
// const paths = [
//   `${moduleFolder}/cli/commands/${moduleName}.ts`,
//   `${moduleFolder}/cli/utils/${moduleName}Utils.ts`,
// ];

const baseDir = __dirname;

console.log("Script directory:", baseDir);

paths.forEach((filePath) => {
  const fullPath = path.join(baseDir, filePath);
  const dir = path.dirname(fullPath);

  // Create the folder if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }

  // Create the file if it doesn't exist
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, "");
    console.log(`Created file: ${fullPath}`);
  }
});

const oldasciiArt = `
*******************************************************
*                                                     *
*    Module "${moduleName}" generated successfully!   *
*                                                     *
*    _____                 _                          *
*  ____  __   __  ____   __   __ _     ___  __    __  *
* (  __)/ _\ (  )(__  ) / _\ (  ( \   / __)(  )  (  ) *
*  ) _)/    \ )(  / _/ /    \/    /  ( (__ / (_/\ )(  *
* (__) \_/\_/(__)(____)\_/\_/\_)__)   \___)\____/(__) *
*                                                     *
*    Happy Coding! 🚀                                 *
*******************************************************
`;

//NOTE: FEEL FREE TO CHANGE THE ASCII ART AS PER YOUR NEEDS

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
