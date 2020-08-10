var commentCounter = 1;
var likeCounter = 1;

function commentHere() {
  // read comment
  const userComment = document.querySelector("#commentInputId").value;

  // create new element
  const newElementChild1 = document.createElement("div");
  newElementChild1.style.marginRight = "50px";
  newElementChild1.textContent = userComment;

  const newElementChild2 = document.createElement("button");
  newElementChild2.textContent = "Delete";

  const newElement = document.createElement("div");
  newElement.style.display = "flex";
  newElement.style.justifyContent = "space-between";
  newElement.appendChild(newElementChild1);
  newElement.appendChild(newElementChild2);

  // add styling to new element
  // newElement.style.background = "royalblue"; // values must be in double quotes or single quote
  // newElement.style.color = "white";
  newElement.style.margin = "4px";

  // comment box elment
  const commentBox = document.querySelector("#commentBox");

  // append the new element to parent
  // commentBox.appendChild(newElement);
  commentBox.insertBefore(newElement, commentBox.firstChild);

  document.querySelector("#commentInputId").value = "";
}

function likeHere() {
  likeCounter++;

  let btnElement = document.querySelector("#btnid");
  btnElement.innerHTML = "Like " + likeCounter;
}
