export const isObjectEmpty = (props) => {
  if (Object.values(props).length) {
    return false;
  }
  console.log(Object.values(props).length);
  return true;
};
