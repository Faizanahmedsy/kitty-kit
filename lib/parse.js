export const parseBoolean = (value) => {
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
};

export const parseBool = (v) => {
  if (v == "1") return true;
  if (v == "0") return false;
  if (v == "undefined") return false;
  if (v == "null") return false;
  return v === "true";
};
