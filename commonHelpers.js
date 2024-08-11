import{a as u,i as o,S as y}from"./assets/vendor-0Fq3u7cb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();u.defaults.baseURL="https://pixabay.com/api/";async function d(s){const r="45271778-6269ea34eb71195547930c138";new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});const{data:a}=await u.get("?${params}");return a}function f({hits:s}){return s.map(({webformatURL:r,largeImageURL:a,tags:i,likes:e,views:t,comments:l,downloads:m})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${a}">
     <img
      class="gallery-image"
      src="${r}"
      alt="${i}"
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
          <p class="attribute-value">${l}</p>
        </li>
        <li class="attribute-item">
          <p class="attribute">Downloads</p>
          <p class="attribute-value">${m}</p>
        </li>
        </ul>
</li>`).join("")}const c=document.querySelector(".gallery"),p=document.querySelector(".form-search"),n=document.querySelector(".loader");p.addEventListener("submit",g);n.style.display="none";async function g(s){s.preventDefault();const r=s.target.elements.query.value.trim().toLowerCase();if(console.log(r),r===""){c.innerHTML="",o.error({message:"Please enter a search query."});return}n.style.display="block";try{const a=await d(r),i=f(a);c.insertAdjacentHTML("beforeend",i),b.refresh(),a.totalHits===0&&o.error({message:"❌ Sorry, there are no images matching your search query. Please try again!"})}catch{}finally{n.style.display="none",p.reset()}}let b=new y(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});o.settings({class:"izi-toast",position:"topRight",backgroundColor:"rgba(239, 64, 64, 1)",progressBarColor:"rgba(181, 27, 27, 1)",theme:"dark"});
//# sourceMappingURL=commonHelpers.js.map
