// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

let createPage = "";
const gallery = document.querySelector('.gallery');

galleryItems.forEach(({ preview, original, description }) => {
  createPage += `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
});

addMarkupPage(createPage);

function addMarkupPage(markup) {
  gallery.insertAdjacentHTML("beforeend", markup);
}

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});


console.log(galleryItems);
