/**
 * JSON ONE
 */
let callAjax = () => {
  console.log("CALLING AJAX HERE!!!");

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

  xhr.onload = () => {
    // default response is JSON
    console.log(xhr.responseText);

    // one change:: the response is in text format let parse and make it json
    const refjson = JSON.parse(xhr.responseText);

    // delegating the DOM operation to seprate method
    handleDOMOperatoinUsingJSON(refjson);
  };

  xhr.send();
};

let handleDOMOperatoinUsingJSON = (refjson) => {
  // our json is an array so lets iternate

  for (let i = 0; i < refjson.length; i++) {
    let item = refjson[i];
    console.log(item);

    // DOM OPERATION HERE :: INSIDE THE LIST FOR EACH ITEM
    const parent = document.querySelector("#parent");
    const newElement = parent.children[0].cloneNode(true);

    // now the values are dynamic from server
    newElement.innerHTML = item.FirstName + " " + item.LastName;
    parent.insertBefore(newElement, parent.firstChild);
  }
};

/**
 * XML ONE
 */
let callAjax4XML = () => {
  console.log("AJAX 4 XML RESPONSE");

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

  // set extra header
  xhr.setRequestHeader("accept", "application/xml");

  // handle response
  xhr.onload = () => {
    console.log(xhr.responseXML);

    // lets seprate the logic for dom operation
    handleDOMOperatoinUsingXML(xhr.responseXML);
  };

  // finally send the request
  xhr.send();
};

let handleDOMOperatoinUsingXML = (xmlDoc) => {
  console.log(xmlDoc);
  const authorList = xmlDoc.querySelectorAll("Author");

  // let iterate array

  for (let i = 0; i < authorList.length; i++) {
    // let accecss author
    const item = authorList[i];

    // lets access FirstName and LastName
    const firstName = item.children[0].innerHTML;
    const lastName = item.children[3].innerHTML;

    // create sample block
    const parent = document.querySelector("#parent");
    const newElement = parent.children[0].cloneNode(true);

    // replace the hardcode value
    newElement.innerHTML = firstName + " " + lastName;

    parent.insertBefore(newElement, parent.firstChild);
  }
};
