let beforeload = new Date().getTime();
//let beforeload2 = new Date().getTime();

$.ajax({
  url: "https://random-words-api.vercel.app/word",
  method: "GET",
  success: function (result) {
    document.querySelector(
      "#word"
    ).textContent = `Random Word: ${result[0].word}`;
    let afterload = new Date().getTime();
    seconds = (afterload - beforeload) / 1000;
    document.querySelector("#load_time").textContent =
      "Loaded in  " + seconds + " sec(s).";
  },
  error: function (error) {
    console.log("FAILED");
    console.log(error);
    console.log("the API has NOT loaded");
    let afterload = new Date().getTime();
    seconds = (afterload - beforeload) / 1000;
    $("#load_time").text("Failed in  " + seconds + " sec(s).");
  },
});

$.ajax({
  url: "https://excuser.herokuapp.com/v1/excuse",
  method: "GET",
  success: function (result) {
    document.querySelector("#excuse").textContent = result[0].excuse;
    let afterload = new Date().getTime();
    seconds = (afterload - beforeload) / 1000;
    document.querySelector("#load_time2").textContent =
      "Loaded in  " + seconds + " sec(s).";
  },
});

$.ajax({
  url: "https://random-data-api.com/api/coffee/random_coffee",
  method: "GET",
  success: function (result) {
    document.querySelector(
      "#coffee"
    ).textContent = `Today's Coffee Of The Day is ${result.blend_name} and it has notes of ${result.notes}.`;
    let afterload = new Date().getTime();
    seconds = (afterload - beforeload) / 1000;
    document.querySelector("#load_time3").textContent =
      "Loaded in  " + seconds + " sec(s).";
  },
});
