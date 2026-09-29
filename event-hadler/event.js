function welcome() {
  alert("Sim salabim muncullah element-elemen HTML!");
  const contents = document.querySelector(".contents");
  contents.removeAttribute("hidden");
}

document.body.onload = welcome();
