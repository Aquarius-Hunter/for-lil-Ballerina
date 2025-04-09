// Inside your script.js
window.addEventListener("click", () => {
  const bgMusic = document.getElementById("bgMusic");
  if (bgMusic.paused) {
    bgMusic.play();
  }
});
