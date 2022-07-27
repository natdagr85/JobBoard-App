// let beforeload = new Date().getTime();
// //let beforeload2 = new Date().getTime();

// $.ajax({
//   url: "https://random-words-api.vercel.app/word",
//   method: "GET",
//   success: function (result) {
//     // document.querySelector(
//     //   "#word"
//     // ).textContent = `Random Word: ${result[0].word}`;
//     // let afterload = new Date().getTime();
//     // seconds = (afterload - beforeload) / 1000;
//     // document.querySelector("#load_time").textContent =
//     //   "Loaded in  " + seconds + " sec(s).";
//   },
//   error: function (error) {
//     console.log("FAILED");
//     console.log(error);
//     console.log("the API has NOT loaded");
//     let afterload = new Date().getTime();
//     seconds = (afterload - beforeload) / 1000;
//     $("#load_time").text("Failed in  " + seconds + " sec(s).");
//   },
// });

// $.ajax({
//   url: "https://excuser.herokuapp.com/v1/excuse",
//   method: "GET",
//   success: function (result) {
//     // document.querySelector("#excuse").textContent = result[0].excuse;
//     // let afterload = new Date().getTime();
//     // seconds = (afterload - beforeload) / 1000;
//     // document.querySelector("#load_time2").textContent =
//     //   "Loaded in  " + seconds + " sec(s).";
//   },
// });

// $.ajax({
//   url: "https://random-data-api.com/api/coffee/random_coffee",
//   method: "GET",
//   success: function (result) {
//     // document.querySelector(
//     //   "#coffee"
//     // ).textContent = `Today's Coffee Of The Day is ${result.blend_name} and it has notes of ${result.notes}.`;
//     // let afterload = new Date().getTime();
//     // seconds = (afterload - beforeload) / 1000;
//     // document.querySelector("#load_time3").textContent =
//     //   "Loaded in  " + seconds + " sec(s).";
//   },
// });

const bttn1 = document.querySelector('.item1');
const bttn2 = document.querySelector('.item2');
const bttn3 = document.querySelector('.item3');
const authKey = 'KvZsCWRxKZAtDLQ/0LIoORzAxRgsu+3YP+Ce/iYc4bQ=';
const apiKey =
  'ead195b8ef754c2da5689f7e8f800e5d17040113511d1950496735eebe7f4e3f';

$.ajax({
  url: 'https://data.usajobs.gov/api/search?JobCategoryCode=2210&Keyword=Software Development&LocationName=San Diego',
  method: 'GET',
  headers: {
    'Authorization-Key': authKey,
  },
  success: function (result) {
    let searchArray = result.SearchResult.SearchResultItems;
    let list = [];
    for (let i = 0; i < searchArray.length; i++) {
      let searchResult = searchArray[i].MatchedObjectDescriptor;
      let searchLinks = searchResult.PositionURI;
      let link = searchLinks.link(searchLinks);

      let x = '<br>' + searchResult.PositionTitle + '<br>' + link + '<br>';

      list.push(x);

      if (searchArray.length >= 1) {
        document.querySelector('#usa').innerHTML = list.join('');
      }
    }
  },
  error: function (result) {
    console.log('ERROR UH OH');
    console.log(result);
  },
});

$.ajax({
  url: 'https://www.themuse.com/api/public/jobs?category=Software%20Engineer&page=1',
  method: 'GET',
  headers: {
    // api_key: apiKey,
  },
  success: function (result) {
    let list = [];
    const resultArray = result.results;
    for (let i = 0; i < resultArray.length; i++) {
      let companyName = resultArray[i].company.name;
      let jobPosition = resultArray[i].name;
      let positionURL = resultArray[i].refs.landing_page;
      let link = positionURL.link(positionURL);

      let z =
        '<br>' + companyName + '<br>' + jobPosition + '<br>' + link + '<br>';

      let y =
        '<br>' + companyName + '<br>' + jobPosition + '<br>' + link + '<br>';

      list.push(y);

      if (resultArray.length >= 1) {
        document.querySelector('#muse').innerHTML = list.join('');
      }
    }
    console.log(list);
  },
  error: function (result) {
    console.log('ERROR UH OH');
    console.log(result);
  },
});

bttn1.addEventListener('click', function () {
  document.getElementById('usa').classList.remove('hidden');
  document.getElementById('muse').classList.add('hidden');
});

bttn2.addEventListener('click', function () {
  document.getElementById('muse').classList.remove('hidden');
  document.getElementById('usa').classList.add('hidden');
});

bttn3.addEventListener('click', function () {
  document.getElementById('usa').classList.add('hidden');
  document.getElementById('muse').classList.add('hidden');
});

const selectElement = document.querySelector('#site-search');
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', event => {
  let data = selectElement.value;

  // const result = document.querySelector('.result');
  // result.textContent = `You like ${event.target.value}`;
});
