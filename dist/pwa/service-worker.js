if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return f[e]||(c=new Promise(async c=>{if("document"in self){const f=document.createElement("script");f.src=e,document.head.appendChild(f),f.onload=c}else importScripts(e),c()})),c.then(()=>{if(!f[e])throw new Error(`Module ${e} didn’t register its module`);return f[e]})},c=(c,f)=>{Promise.all(c.map(e)).then(e=>f(1===e.length?e[0]:e))},f={require:Promise.resolve(c)};self.define=(c,i,s)=>{f[c]||(f[c]=Promise.resolve().then(()=>{let f={};const r={uri:location.origin+c.slice(1)};return Promise.all(i.map(c=>{switch(c){case"exports":return f;case"module":return r;default:return e(c)}})).then(e=>{const c=s(...e);return f.default||(f.default=c),f})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"frontend"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/3.7fcafdc3.css",revision:"fe4b57b8f57a76ae8ba1df43ea481f73"},{url:"css/4.4a42c1b4.css",revision:"687888836106849916fcc0161c9a124f"},{url:"css/Chat..9f38cf01.css",revision:"be8e5883a5d69ef24b7f6bfc872e8fda"},{url:"css/app.c4218f33.css",revision:"7f537ec26b7802ec59d1c50fb1fce67d"},{url:"css/vendor.78f0aed0.css",revision:"9f8ff45e3a5293fa2432488bc2a07a35"},{url:"favicon.ico",revision:"8b9eb314ff597f6f7c7bf8c7a5f717ec"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.8defaa46.woff",revision:"7b85d3fc5af0afe6fcf6fb3fa7a941d5"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.0b27c5d6.woff2",revision:"0b28ad139a4a7d19ca0b55fb7269ac57"},{url:"icons/apple-icon-120x120.png",revision:"c9920835d2adb9f6ab6a79a27f220a3a"},{url:"icons/apple-icon-152x152.png",revision:"9df9e65a1d2c6df3bd9143666b0e8c63"},{url:"icons/apple-icon-167x167.png",revision:"4300c6c136c06abcd781aa18644dd7a3"},{url:"icons/apple-icon-180x180.png",revision:"88dbf3d9e8269f1298486d103e22a57c"},{url:"icons/favicon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/favicon-16x16.png",revision:"df5ff7f4728c4ef4b951d46b4136906f"},{url:"icons/favicon-32x32.png",revision:"64aa9e88dd6545f64226c1e2230f66cc"},{url:"icons/favicon-96x96.png",revision:"d22664397060743b24e8956a5a3fcdec"},{url:"icons/icon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/icon-192x192.png",revision:"a1b423855a450ae7adbd9d2a782e0dfb"},{url:"icons/icon-256x256.png",revision:"9f33ebc999e51d0dc2975fc573d53a0b"},{url:"icons/icon-384x384.png",revision:"a126be0d50ed682c3129e0b8b31f680a"},{url:"icons/icon-512x512.png",revision:"02abd24e7c8638e848d96a6bf78d2c27"},{url:"icons/ms-icon-144x144.png",revision:"f256ec55be616f32ae486ab7571eb936"},{url:"icons/safari-pinned-tab.svg",revision:"de8107bed7f087fb443d8e36855e7467"},{url:"index.html",revision:"901af6ff62288f6bb2198442eb89df9a"},{url:"js/3.48ce28d1.js",revision:"de7b2e499ae94edfb1c4985c3c30f44d"},{url:"js/4.ea30f7ae.js",revision:"129ceceab99f4567b019a08fb6080817"},{url:"js/5.298781b0.js",revision:"65013a85c3a62a2ba72b7c3e7a9f500e"},{url:"js/6.c1e46eec.js",revision:"537b678b57f0b5eedceb557ab6bee63c"},{url:"js/7.91e0abcd.js",revision:"6a724493b2cc85a08c21e5430270bafe"},{url:"js/Chat..92c3b4e9.js",revision:"b278c43ecd4a35c514f199349a5043f5"},{url:"js/app.92a12a9d.js",revision:"c871c09166cdd6b1cc080953a461bcfa"},{url:"js/vendor.d69e2bc4.js",revision:"8418751dfce013269b27698d9adff1b2"},{url:"manifest.json",revision:"4ac733878b45c2eb1579da0f4a5e4b30"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
