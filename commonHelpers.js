import{a as m,i as y,S as q}from"./assets/vendor-0Fq3u7cb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();m.defaults.baseURL="https://pixabay.com/api/";const p=15;async function g(r,t){const s="45271778-6269ea34eb71195547930c138",o=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:p}),{data:e}=await m.get(`?${o}`);return e}function f({hits:r}){return r.map(({webformatURL:t,largeImageURL:s,tags:o,likes:e,views:a,comments:i,downloads:P})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${s}">
     <img
      class="gallery-image"
      src="${t}"
      alt="${o}"
    />
  </a>
  <ul class="galery-attribute-list">
    <li class="attribute-item">
          <p class="attribute">Likes</p>
          <p class="attribute-value">${e}</p>
        </li>
        <li class="attribute-item">
          <p class="attribute">Views</p>
          <p class="attribute-value">${a}</p>
        </li>
        <li class="attribute-item">
          <p class="attribute">Comments</p>
          <p class="attribute-value">${i}</p>
        </li>
        <li class="attribute-item">
          <p class="attribute">Downloads</p>
          <p class="attribute-value">${P}</p>
        </li>
        </ul>
</li>`).join("")}const n=document.querySelector(".gallery"),h=document.querySelector(".form-search"),d=document.querySelector(".loader"),l=document.querySelector(".btn-load");let c=1,u="";h.addEventListener("submit",v);d.style.display="none";l.style.display="none";async function v(r){if(r.preventDefault(),u=r.target.elements.query.value.trim().toLowerCase(),u===""){n.innerHTML="",l.style.display="none",y.error({message:"Please enter a search query."});return}d.style.display="block",n.innerHTML="",c=1;try{const t=await g(u,c);if(console.log(t),t.totalHits===0){l.style.display="none",y.error({message:"❌ Sorry, there are no images matching your search query. Please try again!"});return}const s=f(t);n.insertAdjacentHTML("beforeend",s),l.style.display="block",b(),L.refresh(),t.totalHits>p?l.style.display="block":l.style.display="none"}catch(t){console.log(t)}finally{d.style.display="none",h.reset()}}l.addEventListener("click",async()=>{c+=1,d.style.display="block";try{const r=await g(u,c),t=f(r);n.insertAdjacentHTML("beforeend",t),b(),L.refresh();const s=Math.ceil(r.totalHits/p);if(u===""){n.innerHTML="",y.error({message:"Please enter a search query."});return}c>=s&&(l.style.display="none",y.error({message:"❌ We're sorry, but you've reached the end of search results."}))}catch(r){console.log(r)}finally{d.style.display="none"}});function b(){const r=document.querySelector(".gallery-item");window.scrollBy({top:r.getBoundingClientRect().height*2,behavior:"smooth"})}let L=new q(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});y.settings({class:"izi-toast",position:"topRight",backgroundColor:"rgba(239, 64, 64, 1)",progressBarColor:"rgba(181, 27, 27, 1)",theme:"dark"});
//# sourceMappingURL=commonHelpers.js.map
