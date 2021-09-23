import galleryItems from "./app.js";

// Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.

const refs = {
  galleryList: document.querySelector(".js-gallery"),
  showModal: document.querySelector(".js-lightbox"),
  iconFull: document.querySelector(".lightbox__image"),
  closeButton: document.querySelector('[data-action="close-lightbox"]'),
  overlayBackdrop: document.querySelector(".lightbox__overlay"),
};

//===============================================
/*
const galleryGrid = (item, parent) => {
  const { preview, original, description } = item;
  const imgRef = document.createElement("img");

  imgRef.classList.add("gallery__image");
  imgRef.dataset.source = original;
  imgRef.src = preview;
  imgRef.alt = description;

  parent.appendChild(imgRef);
};
*/

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
//====================================================
const galleryItemsRef = (item, galleryItems) => {
  const { preview, original, description } = item;

  const galleryRef = document.createElement("img");

  galleryRef.classList.add("gallery__image");
  galleryRef.dataset.source = original;
  galleryRef.src = preview;

  galleryRef.alt = description;

  const linkRef = document.createElement("a");
  linkRef.classList.add("gallery__link");
  linkRef.href = original;
  linkRef.appendChild(galleryRef);

  const itemRef = document.createElement("li");
  itemRef.classList.add("gallery__item");
  itemRef.appendChild(linkRef);

  return itemRef;
};

const imagesIcon = galleryItems.map((icon) => galleryItemsRef(icon));

const listHtml = document.querySelector(".js-gallery");
listHtml.append(...imagesIcon);

// ==================================================

// Открытие модального окна по клику на элементе галереи.

refs.galleryList.addEventListener("click", onTagsClick);
refs.closeButton.addEventListener("click", onCloseButton);
refs.overlayBackdrop.addEventListener("click", onCloseOverlay);

//=========open=======

function onTagsClick(even) {
  window.addEventListener("keydown", onPresESCP);
  even.preventDefault();
  console.log(even.target);

  if (even.target.nodeName !== "IMG") {
    return;
  }

  // Подмена значения атрибута src элемента img.lightbox__image.
  if (even.target.nodeName === "IMG") {
    refs.iconFull.src = even.target.src;
    refs.iconFull.alt = even.target.alt;

    refs.showModal.classList.add("is-open");
  }
}

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// ========close=======

function onCloseButton(even) {
  window.removeEventListener("keydown", onPresESCP);
  refs.showModal.classList.remove("is-open");
}

function onCloseOverlay(even) {
  if (even.target === even.currentTarget) {
    onCloseButton();
  }
}

function onPresESCP(even) {
  if (even.code === "Escape") {
    onCloseButton();
    console.log("pres Escape");
  }
}

/*
refs.closeButton.addEventListener("click", (even) => {
  even.preventDefault();
  refs.showModal.classList.remove("is-open");
});

refs.galleryList.addEventListener("click", (even) => {
  if (even.target.nodeName === "IMG") {
    refs.showModal.classList.add(".is-open");
  }
});
*/
/*
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
*/
