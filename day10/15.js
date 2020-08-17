window.addEventListener("load", () => {
  console.log("Hello.LOad");

  const blockContainer = document.querySelector("#block-container");
  console.log(blockContainer.firstElementChild);

  for (let i = 0; i < 10; i++) {
    const newElement = blockContainer.firstElementChild.cloneNode(true);
    newElement.style.display = "flex";
    blockContainer.appendChild(newElement);
  }
});
