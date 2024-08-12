import{a as m,i as d,S as w}from"./assets/vendor-0Fq3u7cb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();m.defaults.baseURL="https://pixabay.com/api/";const p=15;async function f(t,r){const s="45271778-6269ea34eb71195547930c138",l=new URLSearchParams({key:s,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:p}),{data:e}=await m.get(`?${l}`);return e}function g({hits:t}){return t.map(({webformatURL:r,largeImageURL:s,tags:l,likes:e,views:a,comments:i,downloads:v})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${s}">
     <img
      class="gallery-image"
      src="${r}"
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
          <p class="attribute-value">${i}</p>
        </li>
        <li class="attribute-item">
          <p class="attribute">Downloads</p>
          <p class="attribute-value">${v}</p>
        </li>
        </ul>
</li>`).join("")}const u=document.querySelector(".gallery"),h=document.querySelector(".form-search"),c=document.querySelector(".loader"),o=document.querySelector(".btn-load");let n=1,y="";h.addEventListener("submit",P);c.style.display="none";o.style.display="none";async function P(t){if(t.preventDefault(),y=t.target.elements.query.value.trim().toLowerCase(),y===""){u.innerHTML="",d.error({message:"Please enter a search query."});return}c.style.display="block",u.innerHTML="",n=1;try{const r=await f(y,n),s=g(r);u.insertAdjacentHTML("beforeend",s),o.style.display="block",b(),L.refresh(),r.totalHits===0&&d.error({message:"❌ Sorry, there are no images matching your search query. Please try again!"}),r.totalHits>p?o.style.display="block":o.style.display="none"}catch{}finally{c.style.display="none",h.reset()}}o.addEventListener("click",async()=>{n+=1,c.style.display="block";try{const t=await f(y,n),r=g(t);u.insertAdjacentHTML("beforeend",r),b(),L.refresh();const s=Math.ceil(t.totalHits/p);n>=s&&(o.style.display="none",d.error({message:"❌ We're sorry, but you've reached the end of search results."}))}catch(t){console.log(t)}finally{c.style.display="none"}});function b(){const t=document.querySelector(".gallery-item");window.scrollBy({top:t.getBoundingClientRect().height*2,behavior:"smooth"})}let L=new w(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});d.settings({class:"izi-toast",position:"topRight",backgroundColor:"rgba(239, 64, 64, 1)",progressBarColor:"rgba(181, 27, 27, 1)",theme:"dark"});
//# sourceMappingURL=commonHelpers.js.map
