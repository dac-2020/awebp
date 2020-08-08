var counter = 1;
var likeCounter = 1;

/**
 * Create a Comment ELment
 * and
 * Append to the Comment Box
 *
 */
function commentHere() {
  // newelement initialization
  let newElement = document.createElement("div");
  newElement.textContent = "comment " + counter;

  // styling
  newElement.style.background = "tomato";
  newElement.style.margin = "4px";

  // appending to the parent box
  let commentBox = document.querySelector("#commentBox");
  commentBox.appendChild(newElement);

  counter++;
}

function likeHere() {
  likeCounter++;

  document.querySelector("#likeid").innerHTML = "Like " + likeCounter;
}
