const button = document.querySelector("button");
button.addEventListener("click", getJoke);

//fetch returns a promise. if i add .then to that promise it will show me the response object. its an object but the stream has not been read. it has a method called json() which takes time (asynchronist). thats why it returns a promise. and thats why we are doing .then twice.
// function getJoke() {
//   fetch("https://api.jokes.one/jod")
//     .then((res) => {
//       console.log(res);
//       return res.json();
//     })
//     .then((data) => {
//       //jokes[0] is an array with one item- inside are several objects
//       let title = data.contents.jokes[0].joke.title;
//       let joke = data.contents.jokes[0].joke.text;
//       document.querySelector("#joke-title").innerHTML = `
//       <h2> ${title} </h2>

//       <p> ${joke} </p>
//       `;
//     });
// }

async function getJoke() {
  const res = await fetch("https://api.jokes.one/jod");
  console.log(res);
  // console.log(res);

  // let title = prom.contents.jokes[0].joke.title;
  // let joke = prom.contents.jokes[0].joke.text;
  // document.querySelector("#joke-title").innerHTML = `
  //     <h2> ${title} </h2>

  //     <p> ${joke} </p>
  //     `;
}
getJoke();
