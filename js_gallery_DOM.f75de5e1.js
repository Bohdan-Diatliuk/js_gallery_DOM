'use strict';
const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');
thumbs.addEventListener('click', (e)=>{
    e.preventDefault();
    const link = e.target.closest('a');
    const newSrc = link.href;
    largeImg.src = newSrc;
    largeImg.alt = link.title;
});

//# sourceMappingURL=js_gallery_DOM.f75de5e1.js.map
