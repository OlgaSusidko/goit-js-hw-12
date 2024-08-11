import{a as m,i as y,S as h}from"./assets/vendor-0Fq3u7cb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();m.defaults.baseURL="https://pixabay.com/api/";const d=15;async function L(r,t){const s="45271778-6269ea34eb71195547930c138",l=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:d}),{data:e}=await m.get(`?${l}`);return e}function f({hits:r}){return r.map(({webformatURL:t,largeImageURL:s,tags:l,likes:e,views:a,comments:o,downloads:b})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${s}">
     <img
      class="gallery-image"
      src="${t}"
      alt="${l}"
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
          <p class="attribute-value">${o}</p>
        </li>
        <li class="attribute-item">
          <p class="attribute">Downloads</p>
          <p class="attribute-value">${b}</p>
        </li>
        </ul>
</li>`).join("")}const p=document.querySelector(".gallery"),g=document.querySelector(".form-search"),n=document.querySelector(".loader"),i=document.querySelector(".btn-load");let c=1,u="";g.addEventListener("submit",v);n.style.display="none";i.style.display="none";async function v(r){if(r.preventDefault(),u=r.target.elements.query.value.trim().toLowerCase(),u===""){p.innerHTML="",y.error({message:"Please enter a search query."});return}n.style.display="block";try{const t=await L(u,c),s=f(t);p.insertAdjacentHTML("beforeend",s),i.style.display="block",P.refresh(),t.totalHits===0&&y.error({message:"❌ Sorry, there are no images matching your search query. Please try again!"}),t.totalHits>d?i.style.display="block":i.style.display="none"}catch{}finally{n.style.display="none",g.reset()}}i.addEventListener("click",async()=>{c+=1,n.style.display="block";try{const r=await searchImages(u,c),t=f(r);p.insertAdjacentHTML("beforeend",t),lightbox.refresh();const s=Math.ceil(r.totalHits/d);c>=s&&(i.style.display="none",y.error({message:"❌ We're sorry, but you've reached the end of search results."}))}catch{}finally{n.style.display="none"}});let P=new h(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});y.settings({class:"izi-toast",position:"topRight",backgroundColor:"rgba(239, 64, 64, 1)",progressBarColor:"rgba(181, 27, 27, 1)",theme:"dark"});
//# sourceMappingURL=commonHelpers.js.map
