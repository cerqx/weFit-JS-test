function swapCards() {
  const cards = document.querySelectorAll(".col-lg-3:has(.card)");
  const [animals, tech, people, nature] = cards.values();
  nature.after(animals, people, tech);

  animals.querySelector("a.btn").classList.add("btn-success");
}

function applyHeaderStyles() {
  const jumbotron = document.querySelector(".jumbotron");
  jumbotron.classList.add("bg-secondary", "text-white", "text-right");

  const ctaButton = jumbotron.querySelector("a.btn");
  ctaButton.classList.add("btn-success");
}

function applyMenuStyles() {
  const menu = document.querySelector(".btn-group-vertical");
  menu.classList.add("inline-flex");
  menu.classList.remove("btn-group-vertical");
}

function createListItem(label) {
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerText = label;
  return li;
}

function clearActiveItemStates() {
  const items = document.querySelectorAll(".list-group > li.list-group-item");
  items.forEach((item) => item.classList.remove("active"));
}

function setListItemAsActive(position) {
  const item = document.querySelector(
    `.list-group > li.list-group-item:nth-child(${position})`
  );
  if (!item) return;
  clearActiveItemStates();
  item.classList.add("active");
}

function addListItems() {
  const list = document.querySelector(".list-group");
  const fourth = createListItem("Quarto item");
  const fifth = createListItem("Quinto item");
  list.appendChild(fourth);
  list.appendChild(fifth);

  setListItemAsActive(4);
}

document.addEventListener("DOMContentLoaded", function () {
  swapCards();
  applyHeaderStyles();
  applyMenuStyles();
  addListItems();
});