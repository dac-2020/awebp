let likeMe = function (btnElement) {
  // Innerhtml returs STRING.
  let likeCountString = btnElement.children[0].innerHTML;

  // string to number
  let likeCount = parseInt(likeCountString);

  // lets increase the like count
  likeCount++;

  btnElement.children[0].innerHTML = likeCount;
};

let readAndAddComment = function (btnElementComment) {
  let userComment =
    btnElementComment.parentElement.parentElement.children[1].children[0]
      .value;

  console.log(
    btnElementComment.parentElement.parentElement.parentElement.children[2]
      .children[0]
  );

  let commentBox =
    btnElementComment.parentElement.parentElement.parentElement
      .children[2];

  let newElement = commentBox.children[0].cloneNode(true);
  newElement.children[0].innerHTML = userComment;

  commentBox.insertBefore(newElement, commentBox.firstChild);

  // clear the input comment
  btnElementComment.parentElement.parentElement.children[1].children[0].value =
    "";
};

let deleteComment = (btnEelementDel) => {
  console.log(btnEelementDel.parentElement.parentElement);

  btnEelementDel.parentElement.parentElement.remove();
};
