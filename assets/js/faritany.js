document.addEventListener('DOMContentLoaded', function () {
  const textBlock = document.querySelector('.text-block');
  const textBlockInverse = document.querySelector('.text-block-inverse');

  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function checkVisibility() {
      if (isInViewport(textBlock)) {
          textBlock.classList.add('visible');
      }
      if (isInViewport(textBlockInverse)) {
          textBlockInverse.classList.add('visible');
      }
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
  checkVisibility();  // Vérifie initialement si les sections sont déjà visibles
});
