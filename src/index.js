// Get Request

// const results = document.querySelector("#results");
// const form = document.querySelector("#search-form");

// const searchMovies = (query) => {
//   fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       data.Search.forEach((result) => {
//         const movieTag = `<li class="list-inline-item">
//           <img src="${result.Poster}">
//           <p>"${result.Title}"</p>
//           </li>
//           `;
//         results.insertAdjacentHTML("beforeend", movieTag);
//       });
//     });
// };

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const input = event.currentTarget.querySelector(".form-control");
//   results.innerHTML = "";
//   searchMovies(input.value);
// });


// Post Request

const signUp = (event) => {
  event.preventDefault();
  const emailValue = document.querySelector("#email").value;
  const passwordValue = document.querySelector("#password").value;
  fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: emailValue, password: passwordValue })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });
};

const form = document.querySelector("#form");
form.addEventListener("submit", signUp);
