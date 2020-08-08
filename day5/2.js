function handleMouseOver() {
  var id2Element = document.querySelector(".beautify");
  id2Element.style.background = "royalblue";
  id2Element.style.color = "yellow";

  id2Element.innerHTML = "Hello CDACIANS!!";
}

function handleMouseOut() {
  let id2Element = document.querySelector(".beautify");
  id2Element.style.background = "black";
  id2Element.style.color = "white";

  id2Element.innerHTML = "Hello World";
}
