const getRandomNumber = (range) => {
  return (Math.floor(Math.random() * range) % range) + 1;
};

const convertNumberToFixedString = (num) => {
  return num.toString().padStart(3, "0");
};

export { getRandomNumber, convertNumberToFixedString };
