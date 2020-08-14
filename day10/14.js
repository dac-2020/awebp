let likeMe = function (btnElement) {
  console.log(btnElement);

  // btnElement.innerHTML = "Like " + likeCoutner;

  // innerHTML resturs the value as String
  let likeCountStr = btnElement.children[0].innerHTML;

  // parse the count to number :: parseInt converts string to number
  let likeCount = parseInt(likeCountStr);

  likeCount++;

  btnElement.children[0].innerHTML = likeCount;
};

let commentHere = function (btnElementComment) {
  const commentBox =
    btnElementComment.parentElement.parentElement.parentElement
      .children[2];

  let newElement = commentBox.children[0].cloneNode(true);

  // lets access teh input box
  const inputElem =
    btnElementComment.parentElement.parentElement.children[1].children[0];

  newElement.children[0].innerHTML = inputElem.value;

  // clear the input
  inputElem.value = "";

  // add the new element to comment box
  commentBox.insertBefore(newElement, commentBox.firstChild);
};

let deleteComment = function (btnElementDel) {
  console.log(btnElementDel.parentElement.parentElement);

  btnElementDel.parentElement.parentElement.remove();
};
