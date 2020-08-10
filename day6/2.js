var likeCounter = 1;

function commentHere() {
  let userComment = document.querySelector("#inputId1").value; // we are not using innerHTML wy bcz this is a form element

  // Logic here to create the new dynamic element with  new comment layout
  const newElement = document.createElement("div");
  newElement.style.display = "flex";
  newElement.style.justifyContent = "space-between";
  newElement.style.marginBottom = "8px";

  const child1 = document.createElement("div");
  child1.textContent = userComment;

  const child2 = document.createElement("button");
  child2.textContent = "DELETE";

  newElement.appendChild(child1);
  newElement.appendChild(child2);

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
