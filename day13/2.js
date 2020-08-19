let getWeather = function () {
  let xhr = new XMLHttpRequest();

  document.querySelector("#textid").value;

  let cityName = document.querySelector("#textid").value || "mumbai";
  let url =
    "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=";

  url = url + cityName;

  xhr.open("GET", url);
  xhr.onload = () => {
    const refjson = JSON.parse(xhr.responseText);
    // lets do DOM Operation now in seprate method.
    domOperationForResultDisplay(refjson);
  };

  xhr.send();
};

let domOperationForResultDisplay = (refjson) => {
  console.log(refjson);
  // lets read MAX and MIN temp
  const maxTemp = refjson.main.temp_max;
  const minTemp = refjson.main.temp_min;

  const parent = document.querySelector("#parent");

  // lets replace dummy value with Actual Data from the JSON response.

  const newElement = parent.children[0].cloneNode(true);
  newElement.innerHTML = "MAX " + maxTemp + " " + "MIN " + minTemp;

  parent.insertBefore(newElement, parent.firstChild);
};
