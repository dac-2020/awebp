let likeMe = function (btnElement) {
  // Innerhtml returs STRING.
  let likeCountString = btnElement.children[0].innerHTML;

  // string to number
  let likeCount = parseInt(likeCountString);

  // lets increase the like count
  likeCount++;

  btnElement.children[0].innerHTML = likeCount;
};

let deleteComment = (btnEelementDel) => {
  console.log(btnEelementDel.parentElement.parentElement);

  btnEelementDel.parentElement.parentElement.remove();
};

/**
 *
 *
 * We have to clone the sample comment Elemnt
 * we have to update the new elment with user comment
 *
 * Read the value from the input box
 * Clear the input box at the end
 *
 * @param {} btnElementComment
 */
let readAndAddComment = (btnElementComment) => {
  //  task 1 is clone the comment row
  let commentBox =
    btnElementComment.parentElement.parentElement.parentElement
      .children[2];

  console.log(commentBox);
  let newElement = commentBox.children[0].cloneNode(true);

  // read the input
  const inputBox =
    btnElementComment.parentElement.parentElement.children[1].children[0];

  // dynamic value in new element
  newElement.children[0].innerHTML = inputBox.value;

  // clear the input box
  inputBox.value = "";

  commentBox.insertBefore(newElement, commentBox.firstChild);
};
