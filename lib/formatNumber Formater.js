export function inputFormatPhoneNumber(phoneNumber) {
  let inputValue;
  if (phoneNumber) {
    inputValue = phoneNumber.replace(/-/g, "");
    if (inputValue.length > 3 && inputValue.length <= 6) {
      inputValue = `${inputValue.slice(0, 3)}-${inputValue.slice(3)}`;
    } else if (inputValue.length > 6) {
      inputValue = `${inputValue.slice(0, 3)}-${inputValue.slice(
        3,
        6
      )}-${inputValue.slice(6)}`;
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
