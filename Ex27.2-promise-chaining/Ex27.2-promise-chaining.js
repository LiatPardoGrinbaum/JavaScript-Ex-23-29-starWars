const makeAllCaps = (arr) => {
  return new Promise((resolved, rejected) => {
    if (arr.length === 0) {
      rejected("The array is empty, please enter a valid array.");
    } else {
      const newArr = arr.map((word) => {
        let newWord = word.toLowerCase();
        let newWordArr = newWord.split("");
        let firstLetter = newWordArr.shift().toUpperCase();
        newWordArr.unshift(firstLetter);
        return newWordArr.join("");
      });
      resolved(newArr);
    }
  });
};

const sortWords = (arr) => {
  return new Promise((resolved, rejected) => {
    let isAllLetters = arr.every((word) => /^[a-z]+$/i.test(word));
    if (isAllLetters) {
      resolved(arr.sort());
    } else {
      rejected("The array should contain only words with alphabetical charecters. .");
    }
  });
};

// ***calling the functions with a valid array****
const words = ["cat", "doG", "zeBra", "lion", "moUse", "badger"];

makeAllCaps(words)
  .then((res) => {
    console.log(`the capitalized array is: ${res}`);
    return sortWords(res);
  })
  .then((res2) => {
    console.log(`the capitalized and sorted array is: ${res2}`);
  })
  .catch((error) => {
    console.log(error);
  });

// ***calling the functions with an invalid array-empty array****
const words2 = [];

makeAllCaps(words2)
  .then((res) => {
    console.log(`the capitalized array is: ${res}`);
    return sortWords(res);
  })
  .then((res2) => {
    console.log(`the capitalized and sorted array is: ${res2}`);
  })
  .catch((error) => {
    console.log(error);
  });

// ***calling the functions with an invalid array- string with non letters****
const words3 = ["cat", "12doG", "zeBra", "*lion", "moUse", "badger"];

makeAllCaps(words3)
  .then((res) => {
    console.log(`the capitalized array is: ${res}`);
    return sortWords(res);
  })
  .then((res2) => {
    console.log(`the capitalized and sorted array is: ${res2}`);
  })
  .catch((error) => {
    console.log(error);
  });
