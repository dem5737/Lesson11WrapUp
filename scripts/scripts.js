function changeHeaderColor() {
  const header = document.querySelector("header");
  if (!header) return;
  header.style.background =
    "linear-gradient(90deg, #00509e, #0072ce)";
}

const facts = [
  "This site uses CSS Grid in the footer and gallery.",
  "Flexbox is used for the header layout.",
  "Images have both transforms and filters applied.",
  "The contact form is styled with Bootstrap 5.",
  "Responsive design via @media queries is enabled.",
];
function showRandomFact() {
  const msg =
    facts[Math.floor(Math.random() * facts.length)];
  const box = document.getElementById("factBox");
  if (box) {
    box.textContent = msg;
  }
}

let lightboxEl = null;
function openLightbox(src, alt) {
  if (!lightboxEl) {
    lightboxEl = document.createElement("div");
    lightboxEl.id = "lightbox";
    Object.assign(lightboxEl.style, {
      position: "fixed",
      inset: "0",
      background: "rgba(0,0,0,.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "9999",
    });
    lightboxEl.addEventListener("click", closeLightbox);
    document.body.appendChild(lightboxEl);
  }
  lightboxEl.innerHTML = "";
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt || "";
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";
  img.style.borderRadius = "1rem";
  lightboxEl.appendChild(img);
  lightboxEl.style.display = "flex";
}
function closeLightbox() {
  if (lightboxEl) {
    lightboxEl.style.display = "none";
  }
}

function onContactSubmit() {
  const note = document.createElement("div");
  note.textContent =
    "Thanks! Your form is being submitted...";
  Object.assign(note.style, {
    position: "fixed",
    left: "50%",
    top: "20px",
    transform: "translateX(-50%)",
    background: "#111827",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: "8px",
    boxShadow: "0 8px 28px rgba(0,0,0,.25)",
    zIndex: "99999",
  });
  document.body.appendChild(note);
  setTimeout(() => note.remove(), 3000);
  return true;
}
