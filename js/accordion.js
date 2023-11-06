const items = document.querySelectorAll(".item-a");
let imageURLs = [
  "images/accordion/1.jpg",
  "images/accordion/2.jpg",
  "images/accordion/3.jpg",
  "images/accordion/4.jpg",
];

//initially empty
let deviceType = "";
let events = {
  mouse: {
    start: "mouseover",
    end: "mouseout",
  },
  touch: {
    start: "touchstart",
    end: "touchend",
  },
};
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};
isTouchDevice();
items.forEach((item, index) => {
  let img = document.createElement("img");
  img.setAttribute("src", imageURLs[index]);
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  item.appendChild(img);
  //Initial CSS properties for all items
  item.style.flex = "1";
  item.style.transition = "flex 0.5s ease";
  item.addEventListener(events[deviceType].start, () => {
    item.style.flex = "4"; //Expand the item
  });
  item.addEventListener(events[deviceType].end, () => {
    item.style.flex = "1"; //Contract the item
  });
});
