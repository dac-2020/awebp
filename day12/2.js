let callAjax = function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

  xhr.onload = () => {
    // reponse from the server
    const refjson = JSON.parse(xhr.responseText);

    jsonDomOperation(refjson);
  };

  xhr.send();
};

let jsonDomOperation = function (refjson) {
  console.log(refjson);

  let parent = document.querySelector("#parent");

  for (let i = 0; i < refjson.length; i++) {
    let item = refjson[i];

    let newElement = parent.children[0].cloneNode(true);

    newElement.innerHTML = item.FirstName + " " + item.LastName;

    parent.insertBefore(newElement, parent.firstChild);
  }
};

/**
 * XML HANDLER
 */
let callAjaxXML = function () {
  let xhr = new XMLHttpRequest();

  // REQUEST_METHOD, REQUEST_URL
  xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

  // i m looking for xml :: MIME Type
  xhr.setRequestHeader("accept", "application/xml");

  xhr.onload = () => {
    let xmldoc = xhr.responseXML;

    // painting of the page will be done by this method
    // xmlDomHandlerV1(xmldoc);
    xmlDomHandler(xmldoc);
  };

  xhr.send();
};

let xmlDomHandlerV1 = (xmlDoc) => {
  const parentElement = xmlDoc.querySelector("ArrayOfAuthor");
  console.log(parentElement);

  for (let i = 0; i < parentElement.children.length; i++) {
    let authorItem = parentElement.children[i];

    // let firstName = authorItem.querySelector("FirstName").innerHTML;
    // let lastName = authorItem.querySelector("LastName").innerHTML;

    let firstName = authorItem.children[0].innerHTML;
    let lastName = authorItem.children[3].innerHTML;

    // HTML DOM
    let parent = document.querySelector("#parent");
    let newElement = parent.children[0].cloneNode(true);

    newElement.innerHTML = firstName + " " + lastName;

    parent.insertBefore(newElement, parent.firstChild);
  }
};

let xmlDomHandlerV2 = (xmlDoc) => {
  const authorList = xmlDoc.querySelectorAll("Author");

  for (let i = 0; i < authorList.length; i++) {
    let authorItem = authorList[i];

    let firstName = authorItem.children[0].innerHTML;
    let lastName = authorItem.children[3].innerHTML;

    // HTML DOM
    let parent = document.querySelector("#parent");
    let newElement = parent.children[0].cloneNode(true);

    newElement.innerHTML = firstName + " " + lastName;

    parent.insertBefore(newElement, parent.firstChild);
  }
};

let xmlDomHandler = (xmlDoc) => {
  const authorList = xmlDoc.querySelectorAll("Author");

  for (let i = 0; i < authorList.length; i++) {
    const author = authorList[i];

    const firstName = author.children[0].innerHTML;

    const parent = document.querySelector("#parent");
    const newElement = parent.children[0].cloneNode(true);
    newElement.innerHTML = firstName;

    parent.insertBefore(newElement, parent.firstChild);
  }
};
