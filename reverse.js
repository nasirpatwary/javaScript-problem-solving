const strReverse = (str) => {
  const textStr = str.split("").reverse().join("");
  return textStr;
};

const str = "hello";
const result = strReverse(str);

