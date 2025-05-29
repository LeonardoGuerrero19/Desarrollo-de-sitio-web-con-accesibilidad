let zoomLevel = 1;
let imagesHidden = false;
let linksHidden = false;

function increaseFont() {
  if (zoomLevel < 3) {
    zoomLevel += 0.1;
    zoomLevel = Math.min(zoomLevel, 3);
    document.body.style.fontSize = zoomLevel.toFixed(2) + "em";
  }
}

function decreaseFont() {
  if (zoomLevel > 0.33) {
    zoomLevel -= 0.1;  // salto más pequeño para más control
    zoomLevel = Math.max(zoomLevel, 0.33); // no bajar más
    document.body.style.fontSize = zoomLevel.toFixed(2) + "em";
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

function toggleDaltonism(type) {
  document.body.classList.remove('protanopia', 'deuteranopia', 'tritanopia',
                              'protanopia-simple', 'deuteranopia-simple', 'tritanopia-simple');
  if (type) {
    // Puedes usar versiones simples o con filtros SVG si los agregas
    document.body.classList.add(type);
  }
}