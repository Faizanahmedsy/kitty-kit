import { title } from "process";

const PostData = [
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
];

// handlers
export const getPosts = () => PostData;

export const getHelpers = () => HelpersData;
