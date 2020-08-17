/**
 * Event    => Load
 * Listener  => Call Back (Arrow Or Annonymous)
 */
window.addEventListener("load", () => {
  // We can read BODY Elment Once the page is loaded.
  const pbc = document.querySelector("#parentBlockContainer");
  console.log(pbc);

  for (let i = 0; i < 20; i++) {
    const newElement = pbc.children[0].cloneNode(true);
    newElement.style.display = "flex"; // none

    newElement.children[0].innerHTML = "Niket " + i;

    pbc.insertBefore(newElement, pbc.firstChild);
  }
});
