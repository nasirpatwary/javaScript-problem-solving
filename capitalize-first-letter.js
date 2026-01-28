const capitalizeLetter = (str) => {
  return str.split(" ").reduce((a, w) => a + w[0].toUpperCase() + w.slice(1) + " " , "")
 
};

const str = "hello world";
const result = capitalizeLetter(str);



