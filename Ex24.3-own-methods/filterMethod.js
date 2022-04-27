/* 1. Build your own filter method with the help of prototypes
 */

Array.prototype.myFilter = function (callBackFunc) {
  const arr = [];
  for (let item of this) {
    if (callBackFunc(item) === true) {
      arr.push(item);
    }
  }
  return arr;
};

function callBack(item) {
  return item % 2 === 0;
}

//testing:
const arr = [1, 2, 4, 67, 3, 2, 11];
const newArr = arr.myFilter(callBack);
console.log(newArr);
