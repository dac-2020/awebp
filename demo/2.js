// lets start here
const parent = document.querySelector("#parentBlock");
console.log(parent);

window.addEventListener("load", () => {
  console.log("ON.LOAD");

  const parent = document.querySelector("#parentBlock");
  console.log("INSIDE.LOAD", parent);

  let list = [
    { id: 1, title: "Javascript" },
    { id: 2, title: "HTML" },
    { id: 2, title: "CSS" },
    { id: 1, title: "DOM" },
    { id: 2, title: "AJAX" },
    { id: 2, title: "XML" },
    { id: 2, title: "JSON" },
  ];

  // each iteration will create one block and add to parent
  for (let i = 0; i < list.length; i++) {
    let item = list[i];

    // first child of parent is our referrnce block
    const newElement = parent.children[0].cloneNode(true);
    newElement.style.display = "flex";

    // data wil be placed to first child of new element
    newElement.children[0].innerHTML = item.title;

    // append to parent block
    parent.insertBefore(newElement, parent.firstChild);
  }
});
