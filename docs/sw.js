if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const c=e=>n(e,d),t={module:{uri:d},exports:o,require:c};i[d]=Promise.all(r.map((e=>t[e]||c(e)))).then((e=>(s(...e),o)))}}define(["./workbox-6cd28afd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"fd939303de852d7d88bc434ed1239a85"},{url:"assets/index.48de900b.css",revision:null},{url:"assets/index.b5ca0986.js",revision:null},{url:"assets/vendor.5039259d.js",revision:null},{url:"index.html",revision:"58484c1158799fa4ce34415d98099eeb"},{url:"img/favicon.ico",revision:"9c20e1fd9c9e0f1e594e846138729cf6"},{url:"img/avatar.jpeg",revision:"5c9ffdfcdb208a2eef5bb5d92d94dfd4"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"fonts/ubuntu.woff2",revision:"d6de97c4deeb4b0352f51d3d5a3db476"},{url:"icons/apple-touch-icon.png",revision:"872634821ae61e875a0fc1a24d3ece5a"},{url:"icons/android-chrome-192x192.png",revision:"fb5d0de0c10fe4059cf3ad9dc12e862f"},{url:"icons/android-chrome-512x512.png",revision:"415b8aafd4ee9b69a95acfb866ba1212"},{url:"manifest.webmanifest",revision:"b6a2b9a7fc05c645948473e167b26a99"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
