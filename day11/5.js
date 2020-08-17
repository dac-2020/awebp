/**
 * Event    => Load
 * Listener  => Call Back (Arrow Or Annonymous)
 */
window.addEventListener("load", () => {
  // We can read BODY Elment Once the page is loaded.
  const pbc = document.querySelector("#parentBlockContainer");
  console.log(pbc);

  // lets create :: lets assume this value coming from server/db
  // how we wil get :: uisng AJAX :: CALL AJAX :: JSON/XML :: API
  let postList = [
    { id: 1, post: "Hello World" },
    { id: 2, post: "Hello Universe" },
    { id: 3, post: "Hello Javascript" },
    { id: 4, post: "Hello HTML" },
    { id: 5, post: "Hello CSS" },
    { id: 6, post: "Hello DOM" },
    { id: 7, post: "Hello JSON" },
    { id: 8, post: "Hello XML" },
    { id: 9, post: "Hello Callback" },
    { id: 10, post: "Hello AJAX" },
  ];

  for (let i = 0; i < postList.length; i++) {
    let item = postList[i];

    const newElement = pbc.children[0].cloneNode(true);
    newElement.style.display = "flex"; // none

    newElement.children[0].innerHTML = item.post;

    // New Element :: To Place At TOP :: insertBefore
    pbc.insertBefore(newElement, pbc.firstChild);
  }
});
