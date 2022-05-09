const button = document.querySelector("button");
button.addEventListener("click", getJoke);

//fetch return a promise. if i add .then to that promise it will show me the response object
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
