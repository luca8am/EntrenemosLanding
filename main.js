const segments = Array.from(document.querySelectorAll(".segment"));
const panels = Array.from(document.querySelectorAll(".profile-panel"));

function setProfile(profile) {
  segments.forEach((segment) => {
    const active = segment.dataset.profile === profile;
    segment.classList.toggle("is-active", active);
    segment.setAttribute("aria-pressed", String(active));
  });

  panels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.panel === profile);
  });
}

segments.forEach((segment) => {
  segment.addEventListener("click", () => {
    setProfile(segment.dataset.profile);
    document.querySelector("#audiencia")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelector(".lead-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  if (button) {
    const original = button.textContent;
    button.textContent = "Consulta lista para enviar";
    setTimeout(() => {
      button.textContent = original;
    }, 1800);
  }
});

setProfile("atleta");
