if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),d={module:{uri:o},exports:c,require:t};i[o]=Promise.all(r.map((e=>d[e]||t(e)))).then((e=>(s(...e),c)))}}define(["./workbox-87098c68"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"fe2b750fd4694404bcdd08f60edbd4d8"},{url:"icon-512.png",revision:"7c4be77d1ec32fbe248390918dd10f6c"},{url:"index.1804698f.css",revision:null},{url:"index.html",revision:"38377866253cf292a57532726cd3cee5"},{url:"main.7a6def02.js",revision:null},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"icon-512.png",revision:"7c4be77d1ec32fbe248390918dd10f6c"},{url:"manifest.webmanifest",revision:"3f9b1794d7bb2473d99a3cfa81e1c656"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("404.html")))}));
