const items = document.querySelectorAll(".item-a");
let imageURLs = [
  "images/accordion/1.jpg",
  "images/accordion/2.jpg",
  "images/accordion/3.jpg",
  "images/accordion/4.jpg",
];

let deviceType = "mouse";

items.forEach((item, index) => {
  let img = document.createElement("img");
  img.setAttribute("src", imageURLs[index]);
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  item.appendChild(img);

  item.style.flex = "1";
  item.style.transition = "flex 0.5s ease";

  item.addEventListener("mouseover", () => {
    item.style.flex = "4";
  });
  item.addEventListener("mouseout", () => {
    item.style.flex = "1";
  });
});

const items2 = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items2.length; i++) {
    items2[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items2.forEach(item2 => item2.addEventListener('click', toggleAccordion));