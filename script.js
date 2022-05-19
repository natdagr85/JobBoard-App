let beforeload = new Date().getTime();
let beforeload2 = new Date().getTime();

$.ajax({
  url: "https://random-words-api.vercel.app/word",
  method: "GET",
  success: function (result) {
    document.querySelector("#word").textContent = result[0].word;
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
    console.log(result[0].excuse);
    document.querySelector("#excuse").textContent = result[0].excuse;
    let afterload2 = new Date().getTime();
    seconds = (afterload2 - beforeload2) / 1000;
    document.querySelector("#load_time2").textContent =
      "Loaded in  " + seconds + " sec(s).";
  },
});
