
// вся логіка роботи додатка

import { searchImagesByQuery, limit } from './js/pixabay-api.js';
import { createGalery } from './js/render-functions.js';
 
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form-search');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.btn-load')

let currentPage = 1;
let inputValue = '';

form.addEventListener('submit', handleFormSubmit);

loader.style.display = 'none';
loadMore.style.display = 'none';

async function handleFormSubmit(event) {
    event.preventDefault();
    
     inputValue = event.target.elements.query.value.trim().toLowerCase();

     if (inputValue === '') {
    gallery.innerHTML = '';
    iziToast.error({
      message: 'Please enter a search query.',
    });
         return;
     }
    
    loader.style.display = 'block';
    
    try {
        const data = await searchImagesByQuery(inputValue, currentPage);
        const imgMarkup = createGalery(data);
        gallery.insertAdjacentHTML('beforeend', imgMarkup);
        loadMore.style.display = 'block';
        modal.refresh();

         if (data.totalHits === 0) {
            iziToast.error({
                message: `❌ Sorry, there are no images matching your search query. Please try again!`,
            });
        }

        if (data.totalHits > limit) {
            loadMore.style.display = 'block';
        } else {
            loadMore.style.display = 'none';
        };
    } catch {
        
        (console.log)
    } finally {
        loader.style.display = 'none';
      form.reset();
    }
};

loadMore.addEventListener('click', async () => {
  currentPage += 1;
  loader.style.display = 'block';

  try {
    const data = await searchImages(inputValue, currentPage);
    const imgMarkup = createGalery(data);
    gallery.insertAdjacentHTML('beforeend', imgMarkup);
    lightbox.refresh();

    const totalPages = Math.ceil(data.totalHits / limit);

    if (currentPage >= totalPages) {
      loadMore.style.display = 'none';
      iziToast.error({
                message: `❌ We're sorry, but you've reached the end of search results.`,
            });
    }
  } catch  {(console.log)
  } finally {
    loader.style.display = 'none';
  }
});


let modal = new SimpleLightbox('.gallery .gallery-link', {captionsData: 'alt',
  captionDelay: 250,});

  iziToast.settings({
  class: 'izi-toast',
  position: 'topRight',
  backgroundColor: 'rgba(239, 64, 64, 1)',
  progressBarColor: 'rgba(181, 27, 27, 1)',
  theme: 'dark',
  });

