/* Question 1:
In your own words what will this point to and why?(Note
this is the global scope) */

//my answer:
//this point to the window which is the global object. this points to the object it sits inside thats why it's pointing to the window.

console.log(this);

/* Question 2:
a. In your own words what will this point to and why.
b. How can you fix this code. */

//my answer:
//this is an error function it will point to the window
//the result is undefined because there isnt such key in the window object.
//I fixed it by changing the function to a function declaration.
const myObj = {
  name: "Timmy",
  greet: function () {
    console.log(this.name);
  },
};
myObj.greet();

/* Question 3:
In your own words what will this point to and why? */

//my answer:
//it will point to the global scope the window

const myFuncDec = function () {
  console.log(this);
};
myFuncDec();

/* Question 4:
In your own words what will this point to and why? */

//my answer:
//it will point to the global scope the window
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();

/* Question 5:
a. In your own words what will this point to and why.
b. How can you fix this code. */

//my answer:
// this is an arrow function which refers to the window! so I want to change it to a declaration function (annonymous) so it will point to the element. also this should have point to the elemnt with the class of "element" (might be div, p, button or any other element which is an object with properties), but there is no html attched here with an element with that class so that is why it is refering to it as null.
//i added an html file with a button element with class "element" and changed it to an annonymous function. now it points to the button object.
const button = document.querySelector(".element");
button.addEventListener("click", function () {
  console.log(this);
});

//an explantion I found on google:
//Arrow functions don't define their own context since it doesn't have its own this context. They inherit that from the parent scope whenever you call this . this in regular function always refers to the context of the function being called

function hola() {
  this.x = 1;
  this.y = 2;
  console.log(this);
}
hola();
const hey = new hola();
console.log(hey);
