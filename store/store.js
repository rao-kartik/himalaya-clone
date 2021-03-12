var city = document.getElementById("citypin");
var search_btn = document.getElementById("search_btn");
var input_city = document.getElementById("inputcity");
var animate_process = document.getElementById("process");
var finding = document.getElementById("findingCities");
var fullcity = document.getElementById("fullCity");
var scroll = document.getElementById("updateme");
var parent = document.getElementById("stores-data");

var los_place = [
  "HerbexUSA",
  "Rite Aid",
  "Walgreens",
  "Whole Foods Market",
  "Proyurvedic",
];

var los_exact_loc = [
  "Los Angeles, CA 90004 United States",
  "500 South Broadway Los Angeles, CA 90013",
  "Walgreens 617 W 7th St Los Angeles, CA 90017",
  "788 S Grand AveLos Angeles, CA 90014 United States",
  "1707 South Vermont Los Angeles, CA 90006",
];

var los_distance = ["0.2 mi", "0.6 mi", "0.9 mi", "0.9 mi", "2.9 mi"];

var chic_place = [
  "Kramer's Health Food",
  "Merz Apothecary-East Monroe St",
  "Whole Foods Market",
  "Walgreens",
  "CVS®",
];

var chic_exact_loc = [
  "230 South Wabash Street Chicago",
  "17 E. Monroe St Chicago, IL 60603",
  "1101 South Canal Street Ste 107 Chicago, IL 60607",
  "410 N Michigan Ave Chicago, IL 60611",
  "344 WEST HUBBARD CHICAGO, IL 60654",
];

var chic_distance = ["0.2 mi", "0.4 mi", "0.9 mi", "1 mi", "1.2 mi"];
var count = 0;

function showMap() {
  parent.textContent = "";
  finding.setAttribute("class", "lds-ellipsis ");
  setTimeout(function () {
    finding.removeAttribute("class");
  }, 2000);
  input_city.src = `https://www.google.com/maps/embed/v1/place?q=${city.value}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`;
  animate_process.setAttribute("class", "lds-default");
  if (city.value.toLowerCase() == "los angeles") {
    setTimeout(function () {
      showCityData(los_place, los_exact_loc, los_distance);
    }, 2000);
  } else if (city.value.toLowerCase() == "chicago") {
    setTimeout(function () {
      showCityData(chic_place, chic_exact_loc, chic_distance);
    }, 2000);
  } else {
    fullcity.textContent = "Sorry, Data not available";
  }

  setTimeout(function () {
    animate_process.removeAttribute("class");
  }, 2500);
}

search_btn.addEventListener("click", showMap);
function showCityData(places, loc, distance) {
  fullcity.textContent = `${city.value.toUpperCase()}, USA`;
  fullcity.style.marginBottom = "2%";
  parent.textContent = "";
  scroll.setAttribute("class", "scroller");
  for (i = 0; i < places.length; i++) {
    var main_div = document.createElement("div");
    main_div.setAttribute("class", "stores");
    image = document.createElement("img");
    image.src =
      "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_location_on_48px-512.png";
    image.setAttribute("class", "loc-icon");
    var para = document.createElement("p");
    para.textContent = distance[i];
    para.setAttribute("class", "position");
    var inner_div = document.createElement("div");
    var heading = document.createElement("h5");
    heading.textContent = places[i];
    var inner_p = document.createElement("p");
    inner_p.textContent = loc[i];
    var country = document.createElement("p");
    country.textContent = distance[i];
    inner_div.append(heading, inner_p, country);
    main_div.append(image, para, inner_div);
    parent.appendChild(main_div);
  }
}
