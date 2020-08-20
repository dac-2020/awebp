let callAjaxUsingJquery = () => {
  let cityName = "pune";

  let url =
    "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=" +
    cityName;

  $.ajax(url).done((data1) => {
    // myDOMOperationHere(data1);
    $("#parent :nth-child(1)")
      .clone(true)
      .html(data1.name + " " + data1.main.temp_max + " V5")
      .insertBefore($("#parent :nth-child(1)"));
  });
};

let myDOMOperationHere = (data1) => {
  $("#parent :nth-child(1)")
    .clone(true)
    .html(data1.name + " " + data1.main.temp_max + " V4")
    .insertBefore($("#parent :nth-child(1)"));
};

let myDOMOperationHereV3 = (data1) => {
  const newElement = $("#parent :nth-child(1)")
    .clone(true)
    .html(data1.name + " " + data1.main.temp_max);

  newElement.insertBefore($("#parent :nth-child(1)"));
};

let myDOMOperationHereV2 = (data1) => {
  const newElement = $("#parent :nth-child(1)").clone(true);

  newElement.html(data1.name + " " + data1.main.temp_max);

  newElement.insertBefore($("#parent :nth-child(1)"));
};

let myDOMOperationHereV1 = (data1) => {
  // const parent = document.querySelector("#parent");
  // const parent = $("#parent");

  // parent.children[0]
  // $('#parent').children().first()
  // $('#parent :nth-child(1)')
  // $("#parent :first-child");

  // const newElement = parent.children[0].cloneNode(true);
  const newElement = $("#parent :nth-child(1)").clone(true);

  // newElement.innerHTML = data1.name + " " + data1.main.temp_max;
  newElement.html(data1.name + " " + data1.main.temp_max);

  // parent.insertBefore(newElement, parent.firstChild);
  newElement.insertBefore($("#parent :nth-child(1)"));
};
