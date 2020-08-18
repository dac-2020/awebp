let callAjax = function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

  xhr.onload = () => {
    const refjson = JSON.parse(xhr.responseText);
    console.log(refjson);
  };

  xhr.send();
};

let callAjaxXML = function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

  // i m looking for xml :: Requesting to the server
  xhr.setRequestHeader("accept", "application/xml");

  xhr.onload = () => {
    const xmldoc = xhr.responseXML;

    const author = xmldoc.querySelector("Author");
    console.log(author.children[0].innerHTML);
  };

  xhr.send();
};
