import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const galleryItemsMarkup = galleryItems.map(el => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${el.original}">
        <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
    </a>
    </li>`
).join('');
galleryList.innerHTML = galleryItemsMarkup;


const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionsPosition: 'bottom'
});