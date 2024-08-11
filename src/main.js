// вся логіка роботи додатка

import { searchImagesByQuery } from './js/pixabay-api';
import { createGalery } from './js/render-functions.js';
 
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form-search');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleFormSubmit);

loader.style.display = 'none';

async function handleFormSubmit(event) {
    event.preventDefault();
    
    const inputValue = event.target.elements.query.value.trim().toLowerCase();
    console.log(inputValue);
    
     if (inputValue === '') {
    gallery.innerHTML = '';
    iziToast.error({
      message: 'Please enter a search query.',
    });
         return;
     }
    
    loader.style.display = 'block';
    
     try {
        const data = await searchImagesByQuery(inputValue);
        const imgMarkup = createGalery(data);
        gallery.insertAdjacentHTML('beforeend', imgMarkup);
        modal.refresh();
        if (data.totalHits === 0) {
            iziToast.error({
                message: `❌ Sorry, there are no images matching your search query. Please try again!`,
            });
        }
    } catch (err) {
        (console.log)
    } finally {
        loader.style.display = 'none';
        form.reset();
    }
}

let modal = new SimpleLightbox('.gallery .gallery-link', {captionsData: 'alt',
  captionDelay: 250,});



  iziToast.settings({
  class: 'izi-toast',
  position: 'topRight',
  backgroundColor: 'rgba(239, 64, 64, 1)',
  progressBarColor: 'rgba(181, 27, 27, 1)',
  theme: 'dark',
  });

  