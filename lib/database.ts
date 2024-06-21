import { title } from "process";

export const PostData = [
  {
    title: "Magic Ui",
    href: "https://magicui.design/",
  },
  {
    title: "Shadcn",
    href: "https://ui.shadcn.com/",
  },
  {
    title: "Aceternity Ui",
    href: "https://ui.aceternity.com/",
  },
  {
    title: "Lottie Files",
    href: "https://lottiefiles.com/",
  },
  {
    title: "Ui Colors",
    href: "https://uicolors.app/create?ref=producthunt",
  },
];

export const HelpersData = [
  {
    title: "Display Helpers",
    code: `import { toast } from "sonner";

export const display = (value) => {
  if (value) {
    return value;
  } else {
    return " - ";
  }
};

export const eitherDisplayOrRemove = (value) => {
  // IF VALUE IS TRUTHY  DISPLAY VALUE
  if (value) {
    return value;
    // IF VALUE IS FALSY ( NULL OR UNDEFINED OR EMPTY STRING OR 0 OR FALSE)  DISPLAY EMPTY STRING
  } else {
    return " ";
  }
};

export const displayFormatted = (oldText, newText) => {
  if (oldText) {
    return newText;
  } else {
    return "";
  }
};

export const format = {
  replace: (oldText, newText) => newText,
  autoFormat: (oldtext) => {
    const words = oldtext.replaceAll("_", " ");
    const cap = words[0].toUpperCase() + words.slice(1);
    return cap;
  },
};

export const formatCurrency = (amount, currency = "USD") => {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
    amount
  );
};

export const formatToDollar = (number) => {
  // Check if the number is not valid
  if (isNaN(number)) {
    return "Invalid number";
  }

  // Convert the number to a float with 2 decimal places
  let formattedNumber = parseFloat(number).toFixed(2);

  // Convert the number to a string
  formattedNumber = formattedNumber.toString();

  // Split the number into integer and decimal parts
  let parts = formattedNumber.split(".");

  // Format the integer part with commas
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Concatenate the integer and decimal parts with a dot
  let result = "$" + parts.join(".");

  // Return the formatted number
  return result;
};



export const generateUniqueKey = () => {
  return Math.random().toString(36).substring(2, 15);
};

export const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};


export const deepCopy = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const filterArrayByProperty = (array, propertyName, filterValue) => {
  return array.filter((item) => item[propertyName] === filterValue);
};

export default function formatNumberToTwoDecimals(number) {
  if (Number.isInteger(number)) {
    return number; // If the number is an integer, return it without decimals
  } else {
    return Math.round(number * 100) / 100; // Round to two decimal places
  }
}

export function removeCommasFromNumber(numberString) {
  // Use regular expression to replace commas globally
  return numberString.replace(/,/g, "");
}

export const beautifyString = {
  default: function (inputText) {
    let formattedText = inputText.replace(/_/g, " ");
    let words = formattedText.split(" ");

    // Capitalize only the first word
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

    return words.join(" ");
  },

  capitalize: (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  addCommasToPrice: (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  capitalizeAll: (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  },
  capitalizeFirstLetter: (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  capitalizeFirstLetterOfEachWord: (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  },
  capitalizeFirstLetterOfEachWordInSentence: (string) => {
    return string
      .split(". ")
      .map((sentence) => {
        return sentence
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      })
      .join(". ");
  },
  capitalizeFirstLetterOfEachWordInTitle: (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  },
  capitalizeFirstLetterOfEachWordInTitleCase: (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  },
  capitalizeFirstLetterOfEachWordInTitleCaseExcept: (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  },
  capitalizeFirstLetterOfEachWordInTitleExcept: (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  },
  capitalizeFirstLetterOfEachWordInTitleExceptFor: (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  },
  capitalizeFirstLetterOfEachWordInTitleExceptForWords: (string) =>
    string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  capitalizeFirstLetterOfEachWordInTitleExceptForWordsIn: (string) =>
    string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  capitalizeFirstLetterOfEachWordInTitleExceptForWordsInTitle: (string) =>
    string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  capitalizeFirstLetterOfEachWordInTitleExceptForWordsInTitleCase: (string) =>
    string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
};

export const displayError = (message) => {
  let errMessage = message || "An error occurred. Please try again later.";

  return toast.error(errMessage);
};

export const displayMessage = (message) => {
  return message ? toast.error(message) : null;
};
`,
    language: "jsx",
    showLineNumbers: true,
  },
  {
    title: "Number Helpers",
    code: `function formatNumberWithCommas(input) {
    if (isNaN(input)) {
        return 'Invalid input'; // Handle non-numeric inputs
    }

    // Convert input to a number to handle cases like numeric strings
    const number = parseFloat(input);

    if (number === 0) {
        return '0';
    }

    // Split the number into integer and fractional parts
    const parts = number.toString().split('.');
    const integerPart = parts[0];
    const fractionalPart = parts.length > 1 ? parts[1] : '';

    // Add commas to the integer part
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Combine integer and fractional parts
    return fractionalPart ? \`\${formattedIntegerPart}.\${fractionalPart}\` : formattedIntegerPart;
}

// Example usage
console.log(formatNumberWithCommas(1000));         // Output: 1,000
console.log(formatNumberWithCommas(40000));        // Output: 40,000
console.log(formatNumberWithCommas(1234567));      // Output: 1,234,567
console.log(formatNumberWithCommas(-1234567));     // Output: -1,234,567
console.log(formatNumberWithCommas(1234.567));     // Output: 1,234.567
console.log(formatNumberWithCommas(0.1234));       // Output: 0.1234
console.log(formatNumberWithCommas('1000'));       // Output: 1,000
console.log(formatNumberWithCommas('abcd'));       // Output: Invalid input
console.log(formatNumberWithCommas(null));         // Output: Invalid input
console.log(formatNumberWithCommas(undefined));    // Output: Invalid input
console.log(formatNumberWithCommas(NaN));          // Output: Invalid input
console.log(formatNumberWithCommas(0));            // Output: 0
`,
    language: "jsx",
    showLineNumbers: true,
  },
  {
    title: "Local Storage Config",
    code: `const getItem = (key) => {
  const data = typeof window !== "undefined" ? localStorage.getItem(key) : "";

  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

const setItem = (key, value) => {
  const stringify = typeof value !== "string" ? JSON.stringify(value) : value;

  if (typeof window === "undefined") return;

  return localStorage ? localStorage.setItem(key, stringify) : "";
};

const removeItem = (key) => {
  // if (typeof window === "undefined") return;
  localStorage.removeItem(key);
};

export { getItem, setItem, removeItem };
`,
    language: "jsx",
    showLineNumbers: true,
  },
  {
    title: "Secure Local Storage Config",
    code: `import secureLocalStorage from "react-secure-storage";

const getItem = (key) => {
  const data =
    typeof window !== "undefined" ? secureLocalStorage.getItem(key) : "";

  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

const setItem = (key, value) => {
  const stringify = typeof value !== "string" ? JSON.stringify(value) : value;
  return secureLocalStorage.setItem(key, stringify);
};

const removeItem = (key) => {
  secureLocalStorage.removeItem(key);
};

export { getItem, setItem, removeItem };`,
    language: "jsx",
    showLineNumbers: true,
  },
  {
    title: "Session Storage Config",
    code: `const getItem = (key) => {
  const data = typeof window !== "undefined" ? sessionStorage.getItem(key) : "";

  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

const setItem = (key, value) => {
  const stringify = typeof value !== "string" ? JSON.stringify(value) : value;

  if (typeof window === "undefined") return;

  return sessionStorage ? sessionStorage.setItem(key, stringify) : "";
};

const removeItem = (key) => {
  // if (typeof window === "undefined") return;
  sessionStorage.removeItem(key);
};

export { getItem, removeItem, setItem };`,
    language: "js",
    showLineNumbers: true,
  },
  {
    title: "Tailwind Cn Function",
    code: `import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
`,
    language: "js",
    showLineNumbers: true,
  },
  {
    title: "Parse Boolean",
    code: `export const parseBoolean = (value) => {
  if (typeof value === "boolean") {
    // If it's already a boolean, return it as is
    return value;
  }

  // If it's a string, convert it to lowercase and check its value
  if (typeof value === "string") {
    const lowerCaseValue = value.toLowerCase();
    if (lowerCaseValue === "true" || lowerCaseValue === "1") {
      return true;
    } else if (lowerCaseValue === "false" || lowerCaseValue === "0") {
      return false;
    }
  }

  if (typeof value === "number") {
    if (value === 0) {
      return false;
    }
    if (value === 1) {
      return true;
    }
  }

  // If it's neither a boolean nor a recognized string, return a custom error object
  return false; // The string in the constructor is the error message
};`,
    language: "js",
    showLineNumbers: true,
  },
  {
    title: "PhoneNumber Formatters",
    code: `export function inputFormatPhoneNumber(phoneNumber) {
    let inputValue;
    if (phoneNumber) {
      inputValue = phoneNumber.replace(/-/g, "");
      if (inputValue.length > 3 && inputValue.length <= 6) {
        inputValue = \`\${inputValue.slice(0, 3)}-\${inputValue.slice(3)}\`;
      } else if (inputValue.length > 6) {
        inputValue = \`\${inputValue.slice(0, 3)}-\${inputValue.slice(
      3,
      6
    )}-\${inputValue.slice(6)}\`;
      } else {
        inputValue = inputValue;
      }
      return inputValue;
    } else return "";
  }

  export const removeDashFromPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(/[-\s]/g, "");
  };

  export const dashFormat = (number) => {
    // Check if the number is valid
    if (typeof number !== "string" || number.length !== 10 || isNaN(number)) {
      return "Invalid phone number";
    }

    // Extract area code, exchange code, and subscriber number
    var areaCode = number.substring(0, 3);
    var exchangeCode = number.substring(3, 6);
    var subscriberNumber = number.substring(6);

    // Format the number
    var formattedNumber =
      "(" + areaCode + ")-" + exchangeCode + "-" + subscriberNumber;

    return formattedNumber;
  };

  export const preventPhoneInputKeys = (event) => {
    // Get the key code of the pressed key
    const keyCode = event.keyCode || event.which;
    // Check if Ctrl key is pressed along with 'a' (Ctrl+A  = 65 ,Ctrl + C =67, Ctrl + V = 86)
    const isCtrlAPressed = (event.ctrlKey || event.metaKey) && keyCode === 65;
    const isCtrlCPressed = (event.ctrlKey || event.metaKey) && keyCode === 67;
    const isCtrlVPressed = (event.ctrlKey || event.metaKey) && keyCode === 86;

    if (
      !(
        (keyCode >= 48 && keyCode <= 57) || // digits 0-9
        keyCode === 8 || // backspace
        keyCode === 9 || // tab
        keyCode === 46 || // delete
        (keyCode >= 37 && keyCode <= 40) || // arrow keys
        (keyCode >= 96 && keyCode <= 105) || // arrow keys
        isCtrlAPressed ||
        isCtrlCPressed ||
        isCtrlVPressed
      )
    ) {
      event.preventDefault(); // Prevent input
    }
  };
`,
    language: "js",
    showLineNumbers: true,
  },
  {
    title: "Is Email Or Phone",
    code: `export const isEmailOrPhoneNumber = (data) => {
  return data.includes("@") ? "email" : "phone";
};
`,
    language: "js",
    showLineNumbers: true,
  },
  {
    title: "axios config / dataservice / instance",
    code: `import axios from "axios";
import { BASEURL } from "./api.js";
import { toast } from "sonner";
import { getItem } from "@/lib/localStorage.js";
const instance = axios.create({
  baseURL: BASEURL,
});

instance.interceptors.request.use(
  function (config) {
    // Add Authorization header if token exists in localStorage
    const token = getItem("customerAuthToken");
    if (token) {
      config.headers.Authorization = \`\Bearer \${token}\`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Return the response if status is not in the 400 or 500 range
    return response;
  },
  function (error) {
    // Show an alert for errors in the 400 or 500 range
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 600
    ) {
      toast.error(
        \`Error: \${error.response.status} - \${error.response.data.message}\`
      );
    }
    return Promise.reject(error);
  }
);

export default instance;
`,
    language: "js",
    showLineNumbers: true,
  },
] as const;

// handlers
export const getPosts = () => PostData;

export const getHelpers = () => HelpersData;
