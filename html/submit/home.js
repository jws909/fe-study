import { cafes } from "./data.js";

const grid = document.getElementById("cafeGrid");

grid.innerHTML = cafes.map(cafe => `
  <a href="cafeDetail.html?id=${cafe.id}" class="cafe-card">

    <img class="cafe-thumb" src="${cafe.thumbnail}" alt="${cafe.name}">

    <div class="cafe-card-body">
      <p class="cafe-card-name">${cafe.name}</p>
      <p class="cafe-card-desc">${cafe.description}</p>

      <div class="cafe-card-location">
        📍 ${cafe.location}
      </div>
    </div>

  </a>
`).join('');