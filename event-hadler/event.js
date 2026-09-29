function welcome() {
  alert("Sim salabim muncullah element-elemen HTML!");
  const contents = document.querySelector(".contents");
  contents.removeAttribute("hidden");
}

function increment() {
  if (Number(document.getElementById("count").innerText) + 1 > 15) {
    return;
  }

  document.getElementById("count").innerText++;

  if (document.getElementById("count").innerText == 7) {
    const hiddenMessage = document.createElement("h4");
    hiddenMessage.innerText = "Selamat! Anda menemukan hadiah tersembunyi...";

    const image = document.createElement("img");
    image.setAttribute(
      "src",
      "https://raw.githubusercontent.com/dicodingacademy/a315-web-pemula-labs/shared-files/catto.jpg",
    );

    const contents = document.querySelector(".contents");
    contents.append(hiddenMessage, image);
  } else if (document.getElementById("count").innerText == 15) {
    reset();
  }
}

function reset() {
  const resetMessage = document.createElement("h2");
  resetMessage.innerText =
    "Anda sudah mencapai batas! tombol akan direset dalam hitungan 5 detik";

  const contents = document.querySelector(".contents");
  document.body.insertBefore(resetMessage, contents);

  // refresh halaman setelah 5 detik
  setTimeout(() => {
    window.location.reload();
  }, 5000);
}

// document.getElementById("incrementButton").onclick = increment;
// document.body.onload = welcome;
