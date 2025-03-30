document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const background = document.querySelector('.background');
  
    items.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const imgUrl = item.getAttribute('data-bg');
        if (imgUrl) {
          background.style.backgroundImage = `url(${imgUrl})`;
          // Subimos la opacidad para que se vea la imagen
          background.style.opacity = '0.8';
        }
      });
  
      item.addEventListener('mouseleave', () => {
        // Bajamos la opacidad para que desaparezca la imagen
        background.style.opacity = '0';
      });
    });
  });
  