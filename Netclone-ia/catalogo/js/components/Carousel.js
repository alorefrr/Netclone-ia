import { createCard } from "./Card.js";

export function createCarousel(category) {
  const section = document.createElement("div");
  section.className = "slider-section";

  // Header for Title and Indicators
  const header = document.createElement("div");
  header.className = "slider-header";

  const title = document.createElement("h2");
  title.className = "slider-title";
  title.innerText = category.title;

  const indicators = document.createElement("div");
  indicators.className = "slider-indicators";

  header.appendChild(title);
  header.appendChild(indicators);
  section.appendChild(header);

  // Carousel Wrapper with Buttons
  const wrapper = document.createElement("div");
  wrapper.className = "carousel-wrapper";

  // Left Button
  const btnLeft = document.createElement("button");
  btnLeft.className = "carousel-btn carousel-btn-left";
  btnLeft.innerHTML = "&#10094;";
  btnLeft.setAttribute("aria-label", "Rolar para esquerda");

  // Movie Row
  const row = document.createElement("div");
  row.className = "movie-row";

  category.items.forEach((item) => {
    const card = createCard(item);
    row.appendChild(card);
  });

  // Right Button
  const btnRight = document.createElement("button");
  btnRight.className = "carousel-btn carousel-btn-right";
  btnRight.innerHTML = "&#10095;";
  btnRight.setAttribute("aria-label", "Rolar para direita");

  // Add Click Events
  btnLeft.addEventListener("click", () => {
    row.scrollBy({ left: -300, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    row.scrollBy({ left: 300, behavior: "smooth" });
  });

  wrapper.appendChild(btnLeft);
  wrapper.appendChild(row);
  wrapper.appendChild(btnRight);

  section.appendChild(wrapper);
  return section;
}
