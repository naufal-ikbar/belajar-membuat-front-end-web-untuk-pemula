const links = document.getElementById("links");
// links.innerHTML

const dicoding = document.getElementById("dicodingLink");
dicoding.innerText = "Belajar Programming di dicoding";

const google = document.getElementById("googleLink");
google.innerText = "Mencari sesuatu di Google"

dicoding.innerHTML = "<i>Belajar Programming di Dicoding</i>";
google.innerHTML =  "<i>Mencari Sesuatu di Google</i>";

const buttons = document.getElementsByClassName("button");

for (button of buttons) {
  button.children[0].style.borderRadius = "6px";
}