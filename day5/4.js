var counter = 1;
var likeCounter = 1;

function commentHere() {
  let newElement = document.createElement("div");
  newElement.textContent = "comment " + counter;
  newElement.style.background = "tomato";
  newElement.style.margin = "4px";

  let commentParent = document.querySelector("#commentBox");
  commentParent.appendChild(newElement);

  counter++;
}

function likeHere() {
  likeCounter++;

  document.querySelector("#likeid").innerHTML = "Like " + likeCounter;
}
