let likeMe = function (btnElement) {
  let likeCountString = btnElement.children[0].innerHTML;

  // Innerhtml returs STRING.
  let likeCount = parseInt(likeCountString);

  // lets increase the like count
  likeCount++;

  btnElement.children[0].innerHTML = likeCount;
};
