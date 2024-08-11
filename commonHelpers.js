import{a as u,i as o,S as d}from"./assets/vendor-0Fq3u7cb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();u.defaults.baseURL="https://pixabay.com/api/";async function p(i){const r="45271778-6269ea34eb71195547930c138",a=new URLSearchParams({key:r,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}),{data:s}=await u.get(`?${a}`);return s}function f({hits:i}){return i.map(({webformatURL:r,largeImageURL:a,tags:s,likes:e,views:t,comments:l,downloads:y})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${a}">
     <img
      class="gallery-image"
      src="${r}"
      alt="${s}"
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
          <p class="attribute-value">${y}</p>
        </li>
        </ul>
</li>`).join("")}const c=document.querySelector(".gallery"),m=document.querySelector(".form-search"),n=document.querySelector(".loader");m.addEventListener("submit",g);n.style.display="none";async function g(i){i.preventDefault();const r=i.target.elements.query.value.trim().toLowerCase();if(console.log(r),r===""){c.innerHTML="",o.error({message:"Please enter a search query."});return}n.style.display="block";try{const a=await p(r),s=f(a);c.insertAdjacentHTML("beforeend",s),b.refresh(),a.totalHits===0&&o.error({message:"❌ Sorry, there are no images matching your search query. Please try again!"})}catch{}finally{n.style.display="none",m.reset()}}let b=new d(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});o.settings({class:"izi-toast",position:"topRight",backgroundColor:"rgba(239, 64, 64, 1)",progressBarColor:"rgba(181, 27, 27, 1)",theme:"dark"});p();
//# sourceMappingURL=commonHelpers.js.map
