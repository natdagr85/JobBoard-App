const bttn1 = document.querySelector('.item1');
const bttn2 = document.querySelector('.item2');
const bttn3 = document.querySelector('.item3');

$.ajax({
  url: 'https://data.usajobs.gov/api/search?JobCategoryCode=2210&Keyword=Software Development&LocationName=San Diego',
  method: 'GET',
  // headers: {

  // },
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

function searchMuse(category, level) {
  if (category.length === 0) {
    alert('Please type in a search');
  } else {
    $.ajax({
      url:
        'https://www.themuse.com/api/public/jobs?category=' +
        category +
        '&level=' +
        level +
        '&page=1&page_count=5',
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
            '<br>' +
            companyName +
            '<br>' +
            jobPosition +
            '<br>' +
            link +
            '<br>';

          let y =
            '<br>' +
            companyName +
            '<br>' +
            jobPosition +
            '<br>' +
            link +
            '<br>';

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
  }
}

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
const selectLevel = document.getElementById('checkbox');
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', event => {
  let category = encodeURI(selectElement.value);
  let level = encodeURI(selectLevel.value);
  let checked = document.getElementById('checkbox').checked;
  if (checked) {
    searchMuse(category, level);
    console.log(selectLevel.value);
  } else {
    searchMuse(category);
  }
});
// console.log(selectLevel.value);
