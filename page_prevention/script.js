document.addEventListener("DOMContentLoaded", () => {
  // Apparition douce du message final
  const note = document.querySelector(".note");
  setTimeout(() => {
    note.classList.add("visible");
  }, 1200);

  // Animation slide + fade sur l’alerte
  const alertBox = document.getElementById("alert-box");
  alertBox.style.opacity = "0";
  alertBox.style.transform = "translateY(-10px)";
  setTimeout(() => {
    alertBox.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    alertBox.style.opacity = "1";
    alertBox.style.transform = "translateY(0)";
  }, 500);

  // Changement de couleur au survol de l'alerte
  alertBox.addEventListener("mouseover", () => {
    alertBox.style.backgroundColor = "#fff1aa"; 
    alertBox.style.cursor = "help";
  });

  alertBox.addEventListener("mouseout", () => {
    alertBox.style.backgroundColor = "#fff4cf"; 
  });
});
