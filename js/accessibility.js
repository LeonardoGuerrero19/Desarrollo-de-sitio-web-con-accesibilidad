let zoomLevel = 1;
let imagesHidden = false;
let linksHidden = false;

function increaseFont() {
  if (zoomLevel < 3) {
    zoomLevel += 0.5;
    document.body.style.fontSize = zoomLevel + "em";
  }
}

function decreaseFont() {
  if (zoomLevel > 0.5) {
    zoomLevel -= 0.5;
    document.body.style.fontSize = zoomLevel + "em";
  }
}

function resetFont() {
  zoomLevel = 1;
  document.body.style.fontSize = "1em";
}

function changeFont(fontClass) {
  document.body.classList.remove("font-default", "font-serif", "font-mono");
  document.body.classList.add(fontClass);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function toggleHighContrast() {
  document.body.classList.toggle("high-contrast");
}

function toggleImages() {
  imagesHidden = !imagesHidden;
  if (imagesHidden) {
    document.body.classList.add("hide-images");
  } else {
    document.body.classList.remove("hide-images");
  }
}

function toggleLinks() {
  linksHidden = !linksHidden;
  if (linksHidden) {
    document.body.classList.add("hide-links");
  } else {
    document.body.classList.remove("hide-links");
  }
}
