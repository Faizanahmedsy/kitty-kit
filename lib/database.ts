import {
  BackgroundDataType,
  componentsDataType,
  HelperDataType,
  LandingComponentsDataType,
  MissalinousFeaturedDataType,
  PostDataType,
  UiLibrariesDataType,
} from "@/types";

export const PostData: PostDataType = [
  {
    title: "Magic Ui",
    des: "Best for animated landing pages",
    href: "https://magicui.design/",
  },
  {
    title: "Shadcn",
    des: "Most Famous next js ui library",
    href: "https://ui.shadcn.com/",
  },
  {
    title: "Aceternity Ui",
    des: "Best for animated landing pages",
    href: "https://ui.aceternity.com/",
  },
  {
    title: "Mantine Ui",
    des: "Fully Featured Component Library",
    href: "https://mantine.dev/getting-started/",
  },

  {
    title: "Lottie Files",
    des: "Gif Type Animation Vectors, brings life into apps",
    href: "https://lottiefiles.com/",
  },
  {
    title: "Ui Colors",
    des: "Best for color selection",
    href: "https://uicolors.app/create?ref=producthunt",
  },
  {
    title: "Drag and Drop Component",
    des: "easy to use drag and drop component",
    href: "https://ui.mantine.dev/category/dnd/",
  },
  {
    title: "CkEditor",
    des: "Free Full Feature CkEditor",
    href: "https://mantine.dev/x/tiptap/#sticky-toolbar",
  },
];

export const HelpersData: HelperDataType = [
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
    title: "Zustand State Management Setup",
    code: `
import { create } from "zustand";
//import { devtools, persist } from 'zustand/middleware';


const initialState = {
  courses:[]
};

const globalState = (set) => ({
  ...initialState,
  addCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    }));
  },
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId
          ? { ...course, completed: !course.completed }
          : course
      ),
    }));
  },
});

const useGlobalState = create(globalState);

//Do This if you want to store your state in local storage
// const useGlobalState = create(
//   devtools(
//     persist(globalState, {
//       name: "test_mode_global_state",
//     })
//   )
// );

export default useGlobalState;
`,
    language: "js",
    showLineNumbers: true,
  },
  {
    title: "Parse Boolean (By Tejus)",
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
    title: "Encode Query Params",
    code: `export const encodeQueryParams = (params) => {
  const queryItems = [];
  for (let key in params) {
    if (
      params.hasOwnProperty(key) &&
      params[key] !== "" &&
      typeof params[key] !== "undefined"
    ) {
      queryItems.push(
        \`\${encodeURIComponent(key)}=\${encodeURIComponent(params[key])}\`
      );
    }
  }
  return queryItems.length > 0 ? \`?$\{queryItems.join("&")}\` : "";
};`,
    language: "js",
    showLineNumbers: true,
  },
  {
    title: "formatDateFromNow",
    code: `export const formatDateFromNow = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now - date;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);

  if (months > 0) {
    return \` \${months} month\${months > 1 ? "s" : ""} ago\`;
  } else if (days > 0) {
    return \`\${days} day\${days > 1 ? "s" : ""} ago\`;
  } else if (hours > 0) {
    return \`\${hours} hour\${hours > 1 ? "s" : ""} ago\`;
  } else if (minutes > 0) {
    return \`\${minutes} minute\${minutes > 1 ? "s" : ""} ago\`;
  } else {
    return \`\${seconds} second\${seconds !== 1 ? "s" : ""} ago\`;
  }
};`,
    language: "js",
    showLineNumbers: true,
  },
  {
    title: "getTodayDate",
    code: `// DEFINE FUNCTION FOR CALCULATE DAY REMAINING DD-MM-YYYY
export function daysRemaining(date1Str, date2Str) {
  function parseDate(dateStr) {
    const parts = dateStr.split('-');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Months are 0-based in JavaScript Date
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }

  // Parse the input dates
  const date1 = parseDate(date1Str);
  const date2 = parseDate(date2Str);

  // Calculate the difference in time (in milliseconds)
  const timeDifference = date2.getTime() - date1.getTime();

  // Convert the time difference from milliseconds to days
  const daysDifference = timeDifference / (1000 * 3600 * 24);

  // Return the number of days remaining
  return Math.ceil(daysDifference);
}`,
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
    title: "convertUTCToReadableTime",
    code: `export function convertUTCToReadableTime(utcTimestamp) {
  // Given UTC timestamp
  let utcDate = new Date(utcTimestamp);

  // Convert to IST by adding 5 hours and 30 minutes
  let istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
  let istDate = new Date(utcDate.getTime() + istOffset);

  // Format IST date in 'YYYY-MM-DDTHH:mm:ss.sss+05:30' format
  let year = istDate.getFullYear();
  let month = String(istDate.getMonth() + 1).padStart(2, '0');
  let day = String(istDate.getDate()).padStart(2, '0');`,
    language: "js",
    showLineNumbers: true,
  },
  {
    title: "daysRemaining",
    code: `export function daysRemaining(date1Str, date2Str) {
  function parseDate(dateStr) {
    const parts = dateStr.split('-');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Months are 0-based in JavaScript Date
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }

  // Parse the input dates
  const date1 = parseDate(date1Str);
  const date2 = parseDate(date2Str);

  // Calculate the difference in time (in milliseconds)
  const timeDifference = date2.getTime() - date1.getTime();

  // Convert the time difference from milliseconds to days
  const daysDifference = timeDifference / (1000 * 3600 * 24);

  // Return the number of days remaining
  return Math.ceil(daysDifference);
}`,
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

export const unfliteredTricksData = [
  {
    title: "Public and Private Route Handling in Next JS",
    explain:
      "Add this into middleware.js in the root of your project or in src folder(if you have one) Middleware gets called in when ever you change the route. add your protected routes in the matcher array",
    codeblock: {
      title: "Middleware.js",
      code: `import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = false;

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/foo", "/bar"],
};`,
    },
  },
  {
    title: "Solve All Kinds of Hydration Error in Next JS",
    explain:
      "Next JS Renders the client component first time on server and then on Client because of which this error occurs. To solve this error you can use the dynamic import syntax",
    codeblock: {
      title: "Dynamic import",
      code: `import dynamic from "next/dynamic";

const Component = dynamic(() => import("../components/Component"), {
  ssr: false,
});`,
    },
  },
  {
    title: "Add a loader for a speacific component",
    explain:
      "Some times we are loading a very heavy component for example a 3d Model, in Such case we can add a loader",
    codeblock: {
      title: "Add a loader",
      code: `const Avatar = dynamic(() => import("@/components/avatar/avatar"), {
  ssr: false,
  loading: () => (
    <div className="loader h-[50vh] flex justify-center items-center">
      <Loader2 className="mr-2 h-[30%] w-[30%] animate-spin" />
    </div>
  ),
});

export default function Home() {
 return <Avatar />
}

`,
    },
  },
] as const;

export const TricksData = unfliteredTricksData.map((trick) => ({
  ...trick,
  codeblock: {
    ...trick.codeblock,
    language: "js",
    showLineNumbers: true,
  },
}));
export const componentData: componentsDataType = [
  {
    title: "Animated Model",
    sub: " dialog that overlays the primary content with a window, drawing  ",
    link: "https://animata.design/docs/overlay/modal",
  },
  {
    title: "Animated Popover",
    link: "https://ibelick.com/lab/family-popover-menu",
  },
  {
    title: "Github style shiny cards",
    link: "https://ibelick.com/lab/card-spotlight",
  },
  {
    title: "Animated Buttom",
    link: "https://ibelick.com/lab/button-gooey",
  },
  {
    title: "Mouse Follow Caption",
    link: "https://ibelick.com/lab/mouse-follow-caption",
  },
  {
    title: "IOS Slide to unlock",
    link: "https://ibelick.com/lab/ios-slide-unlock",
  },
  {
    title: "Circular Exploding Menu",
    link: "https://ibelick.com/lab/exploding-menu",
  },
  {
    title: "Browser Mock",
    link: "https://ui.lukacho.com/components/mock-browser",
  },
  {
    title: "Modern Tabs",
    link: "https://ui.lukacho.com/components/tab-list",
  },
  {
    title: "Distorted Glass",
    link: "https://ibelick.com/lab/distorted-glass",
  },
  {
    title: "underlay Action Sheet",
    link: "https://ibelick.com/lab/underlay-action-sheet",
  },
  {
    title: "Animated Popover Menu",
    link: "https://ibelick.com/lab/family-popover-menu",
  },
  {
    title: "Card Stack reveal on hover",
    link: "https://ibelick.com/lab/run-stats-stacks",
  },
  {
    title: "Swipeable Card Stack",
    link: "https://ibelick.com/lab/swipeable-stack-cards",
  },
  {
    title: "Label Indicator Carousel",
    link: "https://ibelick.com/lab/label-indicator-carousel",
  },
  {
    title: "Github style Commit Graph",
    link: "https://animata.design/docs/graphs/commit-graph",
  },
  {
    title: "Text Hover with Svg reveal",
    link: "https://animata.design/docs/hero/hero-section-text-hover",
  },
  {
    title: "Text Hover with Svg reveal 2",
    link: "https://animata.design/docs/list/reveal-image",
  },
];

export const useFullWebsites = [
  {
    title: "Free to use 404 pages",
    sub: "",
    link: "https://error404.fun/",
  },
  {
    title: "Free illustrations",
    link: "https://undraw.co/search",
  },
  {
    title: "Mobbin - Design Inspiration",
    link: "https://mobbin.com/browse/web/apps",
  },
  {
    title: "Unsection - Design Inspiration",
    link: "https://www.unsection.com/",
  },
  {
    title: "Tailwind Gradient Generator",
    link: "https://www.creative-tim.com/twcomponents/gradient-generator",
  },
  {
    title: "Make Documentation Websites",
    link: "https://www.gitbook.com/",
  },
  {
    title: "Lottie Files - Animated Gifs with high performance",
    link: "https://www.gitbook.com/",
  },
  {
    title: "Make Documentation Websites",
    link: "https://www.gitbook.com/",
  },
  {
    title: "Shadcn Theme Generator",
    link: "https://zippystarter.com/tools/shadcn-ui-theme-generator",
  },
  {
    title: "Pdfs with Tailwind",
    link: "https://tailwindpdf.com/",
  },
];

export const uiLibrariesData: UiLibrariesDataType[] = [
  {
    title: "ShadCn",
    sub: "Best and Most customizable UI Library",
    link: "https://ui.shadcn.com/",
    fav: true,
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com/",
  },
  {
    title: "Magic UI",
    link: "https://magicui.design/",
  },
  {
    title: "UI Verse",
    link: "https://uiverse.io/",
  },
  {
    title: "Hover Dev",
    link: "https://www.hover.dev/",
  },
  {
    title: "Next UI",
    link: "https://nextui.org/",
  },
  {
    title: "Lukacho UI",
    link: "https://ui.lukacho.com/components",
  },
  {
    title: "Ibelick lab",
    link: "https://ibelick.com/lab",
  },
  {
    title: "Motion primitives",
    link: "https://motion-primitives.com/",
  },
  {
    title: "Mantine Ui",
    link: "https://mantine.dev/",
  },
  {
    title: "Animata Design",
    link: "https://animata.design/",
  },
];
export const MissalinousFeaturedData: MissalinousFeaturedDataType[] = [
  {
    title: "Admin Dashboard",
    sub: "Admin dashboard made with shadcn",
    github: "https://github.com/Kiranism/next-shadcn-dashboard-starter",
    liveDemo:
      "https://next-shadcn-dashboard-starter.vercel.app/dashboard/employee",
  },
  {
    title: "Drag and Drop",
    sub: "Drag and Drop Kanban Board",
    github: "https://github.com/Georgegriff/react-dnd-kit-tailwind-shadcn-ui",
    liveDemo: "https://georgegriff.github.io/react-dnd-kit-tailwind-shadcn-ui/",
    fav: true,
  },
  {
    title: "Appointment Booking Calender",
    sub: "Appointment Booking Calender",
    github: "https://github.com/damianricobelli/shadcn-cal-com",
    liveDemo: "https://shadcn-cal-com.vercel.app/?phone=%2B1&date=2024-07-03",
    fav: true,
  },
  {
    title: "Super Advance Planner",
    sub: "dynamic appointment management. Features drag-and-drop, date range selections",
    github: "https://github.com/UretzkyZvi/planner",
    liveDemo: "https://planner-tau-two.vercel.app/",
    fav: true,
  },
  {
    title: "CkEditor with notion like shortcuts",
    sub: "Advance CkEditor with notion like shortcuts",
    github: "https://github.com/udecode/plate",
    liveDemo: "https://platejs.org/",
    fav: true,
  },
  {
    title: "AutoForm",
    sub: "AutoForm is a React component that automatically creates a @shadcn/ui form based on a zod schema.",
    github: "https://github.com/vantezzen/auto-form",
    liveDemo: "https://vantezzen.github.io/auto-form/.",
  },
  {
    title: "Admin Dashboard 2 ",
    sub: "Admin Dashboard UI built with Shadcn and Vite.",
    github: "https://github.com/satnaing/shadcn-admin",
    liveDemo: "https://shadcn-admin.netlify.app/.",
  },
  {
    title: "Capture Photo From Camera",
    sub: "Capture Photo From Camera Component directly from your browser",
    github: "https://github.com/UretzkyZvi/capture-photo",
    liveDemo: "https://capture-photo-sigma.vercel.app/.",
  },
  {
    title: "Perfect responsive modal component",
    sub: "Perfect responsive modal component",
    github: "https://github.com/redpangilinan/credenza",
    liveDemo: "https://credenza.rdev.pro/",
  },
  {
    title: "Advance Date Picker",
    sub: "Includes preset date ranges, text entry, calendar selection and date comparison",
    github: "https://github.com/johnpolacek/date-range-picker-for-shadcn",
    liveDemo: "https://date-range-picker-for-shadcn-demo.vercel.app/",
  },
  {
    title: "Ck Editor ",
    sub: "A modern WYSIWYG rich-text editor base on tiptap and shadcn-ui",
    github: "https://github.com/Seedsa/echo-editor",
    liveDemo: "https://echo-editor.vercel.app/",
  },
  {
    title: "Minimal CkEditor",
    sub: "Minimal Tiptap Editor",
    github: "https://github.com/Aslam97/shadcn-minimal-tiptap",
    liveDemo: "https://shadcn-minimal-tiptap.vercel.app/",
  },
  {
    title: "Mock Browser Model",
    sub: "Mock Browser Model",
    link: "https://ui.lukacho.com/components/mock-browser",
  },
  {
    title: "Copy to Clipboard",
    sub: "Animated copy to clipboard btn + copy functionality",
    link: "https://ui.lukacho.com/components/copy-to-clipboard",
  },
  {
    title: "Background Gradients",
    sub: "Background Gradients",
    link: "https://bg.ibelick.com",
  },
  {
    title: "Phone Number Input with flags",
    sub: "Phone Number Input with flags",
    github: "https://nyxbui.design/docs/components/input-phone",
  },
  {
    title: "Video Model with video player",
    sub: "Model that pops with a video player",
    link: "https://nyxbui.design/docs/components/video-modal",
  },
  {
    title: "Product Tour",
    sub: "Product Tour Component",
    link: "https://nyxbui.design/docs/components/tour",
  },
  {
    title: "Stepper ",
    sub: "Stepper Component",
    link: "https://nyxbui.design/docs/components/stepper",
  },
  {
    title: "Star Rating",
    sub: "Star Rating",
    link: "https://nyxbui.design/docs/components/star-rating",
  },
  {
    title: "Scratch To Reveal",
    sub: "Scratch To Reveal",
    link: "https://nyxbui.design/docs/components/scratch-to-reveal",
  },
  {
    title: "Scroll Progress",
    sub: "Animated Scroll Progress for your pages",
    link: "https://nyxbui.design/docs/components/scroll-progress",
  },
  {
    title: "File Upload",
    sub: "File upload component for React",
    github: "https://github.com/ManishBisht777/file-vault",
    liveDemo: "https://file-vault-delta.vercel.app/",
  },
  {
    title: "File Upload 2",
    sub: "File upload component for React",
    github: "https://github.com/sadmann7/file-uploader",
    liveDemo: "https://uploader.sadmn.com/",
  },
  //
  //   title: "Advance Textarea",
  //   sub: "Textarea with character count and auto resize",
  //   github: "https://github.com/Aslam97/shadcn-minimal-tiptap",
  //   liveDemo: "https://shadcn-minimal-tiptap.vercel.app/",
  // },
  {
    title: "Advance Checkboxes",
    sub: "Animated checkboxes with different styles",
    link: "https://www.edilozi.pro/docs/components/checkboxes",
  },

  {
    title: "Tracker",
    sub: "Component for visualizing data related to monitoring.",
    link: "https://raw.tremor.so/docs/visualizations/tracker",
  },

  {
    title: "Image Cropper",
    sub: "A minimal image cropper UI built with shadcn and the react-image-crop library!",
    github: "https://github.com/sujjeee/shadcn-image-cropper",
    liveDemo: "https://shadcn-image-cropper.vercel.app/",
  },
  {
    title: "Timeline",
    sub: "Timeline component built with shadcn-ui",
    github: "https://github.com/timDeHof/shadcn-timeline",
    liveDemo: "https://shadcn-timeline.vercel.app/",
  },
  {
    title: "Invoice Generator",
    sub: "About An invoice generator app built using Next.js, Typescript, and Shadcn",
    github: "https://github.com/al1abb/invoify",
    liveDemo: "https://invoify.vercel.app/",
  },
  {
    title: "Loaders",
    sub: "Loaders in react",
    link: "https://www.davidhu.io/react-spinners/",
  },
  {
    title: "Animated Hamburger menu icon",
    sub: "Tasty CSS-animated hamburgers",
    link: "https://jonsuh.com/hamburgers/",
  },
  {
    title: "Animation Library",
    sub: "Tasty CSS-animated hamburgers",
    link: "https://animejs.com/",
  },
];

export const LandingComponentsData: LandingComponentsDataType[] = [
  {
    title: "Simple Landing",
    sub: "Simple Landing page sections direct copy paste",
    tech: ["tailwind", "shadcn-ui"],
    link: "https://components.bridger.to/",
  },
  {
    title: "Animated Bento Grid",
    sub: "Animated bento grid",
    tech: ["tailwind", "shadcn-ui", "framer-motion"],
    link: "https://magicui.design/docs/components/bento-grid",
  },
  {
    title: "Mackbook style dock",
    sub: "An implementation of the MacOS dock",
    tech: ["tailwind", "shadcn-ui", "framer-motion"],
    link: "https://magicui.design/docs/components/dock",
  },
  {
    title: "Cloud of icons",
    sub: "An interactive 3D tag cloud component",
    tech: ["tailwind", "shadcn-ui", "framer-motion"],
    link: "https://magicui.design/docs/components/icon-cloud",
  },

  {
    title: "Animated Progress Circle",
    sub: "Gauge Circle is a component that displays a circular gauge with a percentage value",
    tech: ["tailwind", "shadcn-ui", "framer-motion"],
    link: "https://magicui.design/docs/components/gauge-circle",
  },
  {
    title: "Modern Hero Section",
    tech: ["tailwind", "radix-ui"],
    link: "https://www.farmui.com/components/hero-section",
  },
];

export const BackgroundData: BackgroundDataType[] = [
  {
    title: "Modern Backgrounds",
    link: "https://bg.ibelick.com/",
  },
  {
    title: "Blurry blob",
    link: "https://animata.design/docs/background/blurry-blob",
  },
  {
    title: "Moving Gradient",
    link: "https://animata.design/docs/background/moving-gradient",
  },
  {
    title: "Animated Grid",
    link: "https://ui.lukacho.com/components/animated-grid-background",
  },
  {
    title: "Grid Beam",
    link: "https://ui.lukacho.com/components/background-grid-beam",
  },
  {
    title: "Fade in gradiant",
    link: "https://ui.lukacho.com/components/background-lights",
  },
];

// handlers for
export const getPosts = () => PostData;

export const getHelpers = () => HelpersData;
