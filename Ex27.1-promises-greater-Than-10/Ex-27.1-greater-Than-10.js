const isGreater = (number) => {
  return new Promise((resolved, rejected) => {
    if (number > 10) {
      resolved(`${number} is greater than 10`);
    } else {
      rejected(`${number} is less than 10`);
    }
  });
};

isGreater(1)
  .then((result) => {
    console.log(`resolved: ${result}`);
  })
  .catch((result) => {
    console.log(`rejected: ${result}`);
  });

isGreater(12)
  .then((result) => {
    console.log(`resolved: ${result}`);
  })
  .catch((result) => {
    console.log(`rejected: ${result}`);
  });
