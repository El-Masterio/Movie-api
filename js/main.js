import { navOpen, navClose } from "./navControl.js";
import { hoverIn, hoverOut } from "./animation.js";
import {
  nameCheck,
  emailCheck,
  phoneCheck,
  ageCheck,
  passCheck,
  checkAll,
} from "./Regex.js";

/*
1- make document.ready and loading screen
2- fetch api 
3- show data on console.log
4- try the path of the image and include the id of the item selected
5- make a template card to show the data of the movies
6- show movies on popular / upcoming / and others 
7- make regex for the contact page 
8- make the functionality for the btn up 


*/
// Document Ready
$(document).ready(() => {
  // $(".loading-animation").fadeOut(500, () => {
  //   $("body").css("overflow", "auto");
  // });

  //////////////////// Fetch api
  $("#searchBar").keyup(async function () {
    if ($("#searchBar").val() !== "") await searchMovie($("#searchBar").val());
  });
  getData("trending");
  let movies, tabSelector;
  async function getData(term) {
    $("#content .row").html("");
    //
    let apiUrl = `https://api.themoviedb.org/3/movie/${term}?api_key=886a7145e8f77910f5d90061e0336e29`;
    let myReq = await fetch(`${apiUrl}`);
    if (myReq.ok && myReq.status !== 400 && term !== "trending") {
      let data = await myReq.json();
      console.log(data);
      let results = data.results;

      movies = new Map(Object.entries(results));
      console.log(movies);
      console.log("hi");
      displayMovie();
    } else {
      apiUrl = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=886a7145e8f77910f5d90061e0336e29`
      );
      if (apiUrl.ok && apiUrl.status !== 400) {
        let data = await apiUrl.json();
        let results = data.results;

        movies = new Map(Object.entries(results));
        displayMovie();
      }
    }
  }

  // To get the ID fron the nav-tab
  $(".side-navbar .nav-link").on("click", function (e) {
    tabSelector = $(e.target).attr("id");
    console.log(tabSelector);
    getData(
      tabSelector !== "" && tabSelector !== "trending"
        ? tabSelector
        : "trending"
    );
  });

  // Scrolling Up smoothly
  function scrollUp() {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  }

  // TODO: This one Stopped working in the last min and i dont have the time nor the energy to fix it ..
  // $(".side-navbar .nav-link").on("click", scrollUp);

  $(".btn-up").on("click", scrollUp);

  ////////////////// Show data from API in in the row section in HTML

  function displayMovie() {
    let content = "";
    let imgURL = "https://image.tmdb.org/t/p/w500";
    for (let [key, value] of movies) {
      // console.log(key);
      // console.log(value.id);
      let text = value.vote_average.toFixed(1);
      // console.log(typeof Number(text));
      // console.log(`${imgURL + value.poster_path}`);
      content += `<div class="col-md-4 contentCard " id='${value.id}'>
    <div class="position-relative overflow-hidden animate__fadeIn">
      <img src="${imgURL + value.poster_path}" class="w-100" alt="" />

      <div
        class="overlay animate__animated animate__fadeIn overflow-hidden position-absolute justify-content-center align-items-center text-white"
      >
        <h1
          class="overlay-title text-center animate__animated fw-bolder"
        >
        ${value.title ? value.title : value.name}
        </h1>

        <p class="overlay-desc animate__animated">
         ${value.overview}
        </p>

        <p class="overlay-date animate__animated">
          Release Date:
          <span>${
            value.release_date ? value.release_date : value.first_air_date
          }</span>
        </p>

        <div class="overlay-icons animated__animated">
          ${voteCheck(Number(text))}
        </div>
        <div
          class="mt-3 overlay-rating d-flex align-items-center justify-content-center rounded-circle animate__animated"
        >
          <h4>${value.vote_average.toFixed(1)}</h4>
        </div>
       </div>
     </div>
   </div>`;
    }
    $(".loading-animation").fadeIn(150);

    $("#content .row").html(content);
    $("#content .row div").addClass("animate__fadeIn");
    $(".loading-animation").fadeOut(150);

    $("#content .row .contentCard").mouseenter(hoverIn);
    $("#content .row .contentCard").mouseleave(hoverOut);
  }

  // To check Votes
  function voteCheck(value) {
    const starsCount = Math.floor(value);
    // console.log(starsCount);

    let total = "";
    for (let i = 0; i < starsCount; i++) {
      total += `<i class="fa-solid fa-star text-warning fs-6 animate__animated"></i>`;
      i++;
    }

    if (value % 1 > 0) {
      total += `<i class="fa-regular fa-star-half-stroke text-warning fs-6 animate__animated"></i>`;
    }
    let stars;
    return (stars =
      total ||
      `<i class="fa-solid fa-star text-muted fs-6 animate__animated "></i>`);
  }

  // Fetch new Api for SearchBar
  async function searchMovie(word) {
    let newApi = `https://api.themoviedb.org/3/search/movie?query=${word}&api_key=886a7145e8f77910f5d90061e0336e29&language=en-US&include_adult=false`;
    let data = await fetch(`${newApi}`);
    if (data.ok && data.status !== 400) {
      let key = await data.json();
      let results = key.results;
      movies = new Map(Object.entries(results));
      displayMovie();
    }
  }
});

// Regex
$("#nameInput").on("blur", nameCheck);
$("#emailInput").on("blur", emailCheck);
$("#phoneInput").on("blur", phoneCheck);
$("#ageInput").on("blur", ageCheck);
$("#passInput").on("blur", passCheck);
$("#form input").on("blur", checkAll);
