import galleryItems from "./app.js";

// Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.

console.log(galleryItems);

const galleryItemsRef = (galleryItems) => {
  const galleryRef = document.createElement("img");
  galleryRef.classList.add("gallery__image");

  galleryRef.src = galleryItems.preview;
  galleryRef.dataset.source = galleryItems.original;
  galleryRef.alt = galleryItems.description;

  const linkRef = document.createElement("a");
  linkRef.classList.add("gallery__link");
  linkRef.href = galleryItems.original;
  linkRef.appendChild(galleryRef);

  const itemRef = document.createElement("li");
  itemRef.classList.add("gallery__item");
  itemRef.appendChild(linkRef);

  return itemRef;
};

const imagesIcon = galleryItems.map((icon) => galleryItemsRef(icon));

const listHtml = document.querySelector(".js-gallery");
listHtml.append(...imagesIcon);

// -------------------------------

const ulRef = {
  tags: document.querySelector(".js-gallery"),
};

ulRef.tags.addEventListener("click", onTagsClick);

function onTagsClick(even) {
  even.preventDefault();
  console.log(even.target);

  if (even.target.nodeName !== "IMG") {
    console.log("click no img");
    return;
  }
  console.log("click");
  if (even.target.nodeName === "IMG") {
    let onOpen = document.querySelector("js-lightbox");
    onOpen.classList.add("is-open");
  }
}
