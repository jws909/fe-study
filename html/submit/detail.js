import { cafes } from "./data.js";

const id = new URLSearchParams(location.search).get("id");

const cafe = cafes.find(c => c.id === id);

// ❗ 안전 처리
if (!cafe) {
    document.body.innerHTML = "<h1>카페 없음</h1>";
    throw new Error("Cafe not found");
}

/* ── HERO 영역 ── */
document.getElementById("cafeName").textContent = cafe.name;
document.getElementById("cafeDescription").textContent = cafe.description;
document.getElementById("cafeLocation").textContent = cafe.location;
document.getElementById("cafeImage").src = cafe.thumbnail || cafe.image;

/* ── MENU RENDER ── */
const menuGrid = document.getElementById("menuGrid");

menuGrid.innerHTML = cafe.menus
    .map(menu => `
    <div class="menu-card">

      <img class="menu-thumb" src="${menu.image}" alt="${menu.name}" />

      <div class="menu-card-body">

        <p class="menu-name">${menu.name}</p>

        <p class="menu-desc">${menu.description}</p>

        <p class="menu-price">${menu.price.toLocaleString()}원</p>

        <button class="menu-add-btn" onclick="addCart('${menu.id}')">
          담기
        </button>

      </div>

    </div>
  `)
    .join("");

/* ── CART LOGIC ── */
window.addCart = function (menuId) {
    const menu = cafe.menus.find(m => m.id === menuId);

    if (!menu) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(menu);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateBadge(cart.length);
    showToast(menu.name + " 담김");
};

/* ── BADGE ── */
function updateBadge(count) {
    document.getElementById("cartBadge").textContent = count;
}

/* ── TOAST ── */
function showToast(text) {
    const toast = document.getElementById("toastMsg");

    toast.textContent = text;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 1500);
}

/* ── 초기 badge ── */
const cart = JSON.parse(localStorage.getItem("cart")) || [];
updateBadge(cart.length);