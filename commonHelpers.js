import{i as l,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function u(o){const r="https://pixabay.com/api/",s="45271778-6269ea34eb71195547930c138",a=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${a}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function y({hits:o}){return o.map(({webformatURL:r,largeImageURL:s,tags:a,likes:e,views:t,comments:i,downloads:m})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${s}">
     <img
      class="gallery-image"
      src="${r}"
      alt="${a}"
    />
  </a>
  <ul class="galery-attribute-list">
    <li class="attribute-item">
          <p class="attribute">Likes</p>
          <p class="attribute-value">${e}</p>
        </li>
        <li class="attribute-item">
          <p class="attribute">Views</p>
          <p class="attribute-value">${t}</p>
        </li>
        <li class="attribute-item">
          <p class="attribute">Comments</p>
          <p class="attribute-value">${i}</p>
        </li>
        <li class="attribute-item">
          <p class="attribute">Downloads</p>
          <p class="attribute-value">${m}</p>
        </li>
        </ul>
</li>`).join("")}const c=document.querySelector(".gallery"),p=document.querySelector(".form-search"),n=document.querySelector(".loader");p.addEventListener("submit",d);n.style.display="none";function d(o){o.preventDefault();const r=o.target.elements.query.value.trim().toLowerCase();if(console.log(r),r===""){c.innerHTML="",l.error({message:"Please enter a search query."});return}n.style.display="block",u(r).then(s=>{console.log(s);const a=y(s);c.insertAdjacentHTML("beforeend",a),g.refresh(),s.totalHits===0&&l.error({message:"❌ Sorry, there are no images matching your search query. Please try again!"})}).catch(console.log).finally(()=>{n.style.display="none",p.reset()})}let g=new f(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});l.settings({class:"izi-toast",position:"topRight",backgroundColor:"rgba(239, 64, 64, 1)",progressBarColor:"rgba(181, 27, 27, 1)",theme:"dark"});u();
//# sourceMappingURL=commonHelpers.js.map
