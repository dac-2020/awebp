// lets start here
const parent = document.querySelector("#parentBlock");
console.log(parent);

window.addEventListener("load", () => {
  console.log("ON.LOAD");

  // value is hardcoded at client side :: lets replace with some server data;
  // lets make ajax request here;

  // Step 1
  let xhr = new XMLHttpRequest();

  // makding GET request. :: demo URL :: https://reqres.in/api/users?page=2
  xhr.open("GET", "https://reqres.in/api/users?page=2");

  // handshake and lisner of response
  xhr.onreadystatechange = () => {
    // on ready state 4 :: when operation comples with server
    if (xhr.readyState === 4) {
      // server response
      console.log(xhr.responseText);

      // responser server is in string
      let sjson = JSON.parse(xhr.responseText);
      // data.is array or list from server
      console.log(sjson.data);

      // lets use this list and plot our dom by calling dom logic here
      domlogicHere(sjson.data);
    }
  };

  // AJAX call goes here.
  xhr.send();
});

// list from server
let domlogicHere = function (list) {
  const parent = document.querySelector("#parentBlock");
  console.log("INSIDE.LOAD", parent);

  // each iteration will create one block and add to parent
  for (let i = 0; i < list.length; i++) {
    let item = list[i];

    // first child of parent is our referrnce block
    const newElement = parent.children[0].cloneNode(true);
    newElement.style.display = "flex";

    // data wil be placed to first child of new element :: as there is no title in server data
    newElement.children[0].innerHTML =
      item.first_name + " " + item.last_name;

    // append to parent block
    parent.insertBefore(newElement, parent.firstChild);
  }
};
