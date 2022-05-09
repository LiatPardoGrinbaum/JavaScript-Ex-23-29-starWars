const button = document.querySelector("button");
button.addEventListener("click", getJoke);

//fetch returns a promise. if i add .then to that promise it will show me the resolve of the promise- in this api case- a response object (inside there is body which is a readble stream- a stream of bind data which has a method called json() that if i use it, it will return a promise that js can use (because that action of getting the data takes time (asynchronist), promise will help with it). data is the resolve of that promise. and thats why we are doing .then twice.

function getJoke() {
  fetch("https://api.jokes.one/jod")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //jokes[0] is an array with one item- inside are several objects
      let title = data.contents.jokes[0].joke.title;
      let joke = data.contents.jokes[0].joke.text;
      document.querySelector("#joke-title").innerHTML = `
      <h2> ${title} </h2> 
      
      <p> ${joke} </p>
      `;
    });
}
