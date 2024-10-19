import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import readline from "readline"; // Using readline for input

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to ask questions
const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

// Function to display project structure options
const displayStructureOptions = () => {
  console.log("Select a project structure:");
  console.log("1. Module Master Structure");
  console.log("2. Full-Stack Project Structure");
  console.log("3. Frontend Component Structure");
  console.log("4. Frontend Hooks");
  console.log("5. Frontend Context Providers");
  console.log("6. Backend API Structure");
  console.log("7. Backend Utility Functions");
  console.log("8. Database Migrations/Seeds");
  console.log("9. Feature-Based Structure");
  console.log("10. GraphQL Structure");
  console.log("11. Serverless Functions");
  console.log("12. Microservices Architecture");
  console.log("13. CLI Tool Structure");
};

const main = async () => {
  const moduleName = await askQuestion("Please provide a module name: ");

  // Display structure options and get user choice
  displayStructureOptions();
  const choice = await askQuestion("Enter the number of your choice (1-13): ");

  const moduleFolder = moduleName.toLowerCase();

  let paths;

  // Define paths based on user choice
  switch (choice) {
    case "1": // Module Master Structure
      paths = [
        `${moduleFolder}/list/${moduleName}List.tsx`,
        `${moduleFolder}/list/${moduleName}ListTable.tsx`,
        `${moduleFolder}/list/columns.tsx`,
        `${moduleFolder}/details/${moduleName}Detail.tsx`,
        `${moduleFolder}/mutate/CreateUpdate${moduleName}.tsx`,
        `${moduleFolder}/types.ts`,
      ];
      break;
    case "2":
      paths = [
        `${moduleFolder}/shared/types/${moduleName}Types.ts`,
        `${moduleFolder}/shared/interfaces/${moduleName}Interface.ts`,
        `${moduleFolder}/config/${moduleName}Config.ts`,
        `${moduleFolder}/config/${moduleName}Env.ts`,
        `${moduleFolder}/tests/${moduleName}Service.test.ts`,
        `${moduleFolder}/tests/${moduleName}Controller.test.ts`,
      ];
      break;
    case "3":
      paths = [
        `${moduleFolder}/components/${moduleName}.tsx`,
        `${moduleFolder}/components/${moduleName}Header.tsx`,
        `${moduleFolder}/components/${moduleName}Footer.tsx`,
        `${moduleFolder}/components/${moduleName}Card.tsx`,
      ];
      break;
    case "4":
      paths = [
        `${moduleFolder}/hooks/use${moduleName}.ts`,
        `${moduleFolder}/hooks/use${moduleName}Details.ts`,
      ];
      break;
    case "5":
      paths = [
        `${moduleFolder}/context/${moduleName}Context.tsx`,
        `${moduleFolder}/context/${moduleName}Provider.tsx`,
      ];
      break;
    case "6":
      paths = [
        `${moduleFolder}/routes/${moduleName}Routes.ts`,
        `${moduleFolder}/controllers/${moduleName}Controller.ts`,
        `${moduleFolder}/models/${moduleName}Model.ts`,
        `${moduleFolder}/services/${moduleName}Service.ts`,
      ];
      break;
    case "7":
      paths = [
        `${moduleFolder}/utils/${moduleName}Helper.ts`,
        `${moduleFolder}/utils/${moduleName}Validator.ts`,
      ];
      break;
    case "8":
      paths = [
        `${moduleFolder}/database/migrations/${moduleName}Migration.ts`,
        `${moduleFolder}/database/seeds/${moduleName}Seed.ts`,
      ];
      break;
    case "9":
      paths = [
        `${moduleFolder}/feature/${moduleName}/index.tsx`,
        `${moduleFolder}/feature/${moduleName}/styles.module.css`,
        `${moduleFolder}/feature/${moduleName}/hooks.ts`,
      ];
      break;
    case "10":
      paths = [
        `${moduleFolder}/graphql/resolvers/${moduleName}Resolver.ts`,
        `${moduleFolder}/graphql/schemas/${moduleName}Schema.ts`,
        `${moduleFolder}/graphql/loaders/${moduleName}Loader.ts`,
      ];
      break;
    case "11":
      paths = [
        `${moduleFolder}/lambdas/${moduleName}Function.ts`,
        `${moduleFolder}/lambdas/${moduleName}Handler.ts`,
      ];
      break;
    case "12":
      paths = [
        `${moduleFolder}/microservices/${moduleName}/handlers.ts`,
        `${moduleFolder}/microservices/${moduleName}/models.ts`,
      ];
      break;
    case "13":
      paths = [
        `${moduleFolder}/cli/commands/${moduleName}.ts`,
        `${moduleFolder}/cli/utils/${moduleName}Utils.ts`,
      ];
      break;
    default:
      console.error("Invalid choice. Exiting...");
      return;
  }

  // Check if the module already exists
  if (fs.existsSync(path.join(__dirname, moduleFolder))) {
    console.error(
      `Module "${moduleFolder}" already exists. Please choose a different name.`
    );
    process.exit(1);
  }

  // Create directories and files
  paths.forEach((filePath) => {
    const fullPath = path.join(__dirname, filePath);
    const dir = path.dirname(fullPath);

    // Create the folder if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }

    // Create the file
    if (!fs.existsSync(fullPath)) {
      // Add content as per your templates or leave it empty
      const content = `// ${filePath} - Auto-generated\n\n// Add your code here\n`;
      fs.writeFileSync(fullPath, content);
      console.log(`✅ Created file: ${fullPath}`); // Using a green tick to indicate success
    }
  });

  // ASCII Art
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

  rl.close(); // Close the readline interface
};

// Run the main function
main();
