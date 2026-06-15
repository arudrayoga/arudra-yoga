document.addEventListener('DOMContentLoaded', function(){
  const items = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');

  items.forEach(i=>{
    i.addEventListener('click', ()=>{
      lbImg.src = i.src;
      lbImg.alt = i.alt || '';
      lightbox.classList.add('show');
      lightbox.setAttribute('aria-hidden','false');
    });
  });

  lightbox.addEventListener('click', ()=>{
    lightbox.classList.remove('show');
    lightbox.setAttribute('aria-hidden','true');
    lbImg.src = '';
  });

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
      lightbox.classList.remove('show');
      lightbox.setAttribute('aria-hidden','true');
      lbImg.src = '';
    }
  });
});
