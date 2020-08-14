let likeCounter = 0;
let likeMe = function (btnElement) {
  likeCounter++;
  btnElement.innerHTML = "Like " + likeCounter;
};
