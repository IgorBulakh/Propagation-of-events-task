// const galleryItems =
export default [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

/*

// ???????????????? ?? ???????????? ???????????????? ???? ?????????????? ???????????? galleryItems ???? app.js ?? ???????????????????????????????? ??????????????.

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

*/
