const items = document.querySelectorAll(".item-a");
let imageURLs = [
  "images/accordion/1.jpg",
  "images/accordion/2.jpg",
  "images/accordion/3.jpg",
  "images/accordion/4.jpg",
];

let deviceType = "mouse"; // Убрал функцию isTouchDevice, так как мы будем использовать события мыши

items.forEach((item, index) => {
  let img = document.createElement("img");
  img.setAttribute("src", imageURLs[index]);
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  item.appendChild(img);

  // Настроим CSS свойства для всех элементов
  item.style.flex = "1";
  item.style.transition = "flex 0.5s ease";

  // Добавим обработчики событий для раскрытия и закрытия элементов
  item.addEventListener("mouseover", () => {
    item.style.flex = "4"; // Раскрыть элемент
  });
  item.addEventListener("mouseout", () => {
    item.style.flex = "1"; // Закрыть элемент
  });
});
