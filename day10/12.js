let likeCoutner = 0;

let likeMe = function (btnElement) {
  console.log(btnElement);

  likeCoutner++;
  btnElement.innerHTML = "Like " + likeCoutner;
};
