var w=Object.defineProperty;var x=(o,e,s)=>e in o?w(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s;var m=(o,e,s)=>x(o,typeof e!="symbol"?e+"":e,s);import{a as y,S as P,i as f}from"./assets/vendor-Qob_5Ba8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();y.defaults.baseURL="https://pixabay.com/api/";const q="39901627-719ccf8971235dd54bb900542";async function g({page:o,perPage:e,query:s}){const{data:a}=await y.get("",{params:{key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:e}});return a}function b(o){return o.map(({webformatURL:e,largeImageURL:s,tags:a,likes:t,views:r,comments:n,downloads:v})=>`<li class='gallery-item'>
        <a class="gallery-link" href="${s}" >
		<img
			class="gallery-image"
			src="${e}"
			alt="${a}"
            width='358'
            height='200'
			/>
	</a>
    <ul class='img-info'>
    <li><p>Likes</p><p>${t}</p></li>
    <li><p>Views</p><p>${r}</p></li>
    <li><p>Comments</p><p>${n}</p></li>
    <li><p>Downloads</p><p>${v}</p></li>
    </ul>
</li>`).join("")}const c=class c{constructor(e){this.button=e,this.prevText=""}disable(){this.button.disabled=!0}enable(){this.button.disabled=!1}hide(){this.button.classList.add(c.HIDDEN_CLASS)}show(){this.button.classList.remove(c.HIDDEN_CLASS)}setLoading(){this.disable(),this.prevText=this.button.textContent,this.button.textContent="Loading..."}setNormal(){this.button.textContent=this.prevText,this.enable()}};m(c,"HIDDEN_CLASS","is-hidden");let d=c,L=new P(".gallery-link",{captionDelay:250,captionsData:"alt"});const p=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=document.querySelector(".js-load-more"),l=new d(h),D=document.querySelector(".form"),i={page:1,perPage:15,maxPage:1,query:""};D.addEventListener("submit",C);async function C(o){o.preventDefault(),p.innerHTML="",l.hide(),i.page=1;const e=o.currentTarget;u.style.display="block";const s=e.elements.search.value.trim();i.query=s;try{const a=await g(i);a.total===0&&f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.maxPage=Math.ceil(a.totalHits/i.perPage),p.innerHTML=b(a.hits),L.refresh(),i.maxPage>i.page&&(l.show(),h.addEventListener("click",S))}catch(a){console.error(a)}finally{u.style.display="none",e.reset()}}async function S(o){l.setLoading(),i.page+=1,u.style.display="block";try{const e=await g(i),s=b(e.hits);p.insertAdjacentHTML("beforeend",s),L.refresh();let t=document.querySelector(".gallery-item").getBoundingClientRect();for(const r in t)typeof t[r]!="function"&&window.scrollBy({top:2*t.height,behavior:"smooth"});l.setNormal(),i.maxPage===i.page&&(l.hide(),h.removeEventListener("click",S),f.success({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"blue",icon:!1}))}catch(e){console.log(e)}finally{u.style.display="none"}}
//# sourceMappingURL=index.js.map
