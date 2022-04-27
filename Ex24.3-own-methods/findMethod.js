/* 2. Build your own find method with the help of prototypes  */
Array.prototype.myFind = function (callBackFunc) {
  for (let item of this) {
    if (callBackFunc(item) === true) {
      return item;
    }
  }
  return item;
};

function callBack(item) {
  return item % 2 === 0;
}

function callBack2(item) {
  return item > 15 ? true : false;
}

const arr = [1, 2, 4, 67, 3, 2, 11];

//testing:
const newArr = arr.myFind(callBack);
console.log(newArr); // 2

const newArr2 = arr.myFind(callBack2);
console.log(newArr2); //67
