"use strict";var thumbs=document.getElementById("thumbs"),largeImg=document.getElementById("largeImg");thumbs.addEventListener("click",function(e){e.preventDefault();var t=e.target.closest("a");largeImg.src=t.href,largeImg.alt=t.title});
//# sourceMappingURL=js_gallery_DOM.d2e363dc.js.map
