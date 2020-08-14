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
