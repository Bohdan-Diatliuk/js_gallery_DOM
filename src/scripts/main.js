'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('a');

  const newSrc = link.href;

  largeImg.src = newSrc;
  largeImg.alt = link.title;
});
