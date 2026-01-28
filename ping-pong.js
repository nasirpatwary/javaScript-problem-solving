const pingPong = (number) => {
  for (let index = 1; index <= number; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("PingPong");
    } else if (index % 3 === 0) {
      console.log("Ping");
    } else if (index % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(index);
    }
  }
};

const number = 120;
pingPong(number);
