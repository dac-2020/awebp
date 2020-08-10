var likeCounter = 1;

function commentHere() {
  let userComment = document.querySelector("#inputId1").value; // we are not using innerHTML wy bcz this is a form element

  // create new element
  const newElement = document.createElement("div");
  newElement.textContent = userComment; // removed the hardcode with user comment

  // add styling to new element
  newElement.style.background = "royalblue"; // values must be in double quotes or single quote
  newElement.style.color = "white";
  newElement.style.margin = "4px";

  // comment box elment
  const commentBox = document.querySelector("#commentBox");

  // now we want to add the element at the top.
  commentBox.insertBefore(newElement, commentBox.firstChild);

  // clean the input box
  document.querySelector("#inputId1").value = "";
}

function likeHere() {
  likeCounter++;

  let btnElement = document.querySelector("#btnid");
  btnElement.innerHTML = "Like " + likeCounter;
}
