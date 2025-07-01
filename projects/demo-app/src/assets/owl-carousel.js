console.log("## Custom Owl Carousel script loaded ##");

const positionCarouselDots = () => {
  const dots = document.querySelector(".owl-carousel .owl-dots");
  const prevBtn = document.querySelector(".owl-carousel .owl-nav .owl-prev");
  const nextBtn = document.querySelector(".owl-carousel .owl-nav .owl-next");

  if (!dots || !prevBtn || !nextBtn) {
    console.log(
      "Owl Carousel elements not found. Ensure the carousel is initialized correctly. Maybe You are in another page or the carousel is not initialized yet."
    );
    return;
  }

  const svgIcon = (iconId) => `
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
      <use class="fill-current" href="/assets/icons.svg#${iconId}"></use>
    </svg>
  `;

  prevBtn.innerHTML = svgIcon("arrow-left");
  nextBtn.innerHTML = svgIcon("arrow-right");

  const width = dots?.offsetWidth || 0;
  nextBtn.style.position = "absolute";
  nextBtn.style.left = width + 18 + "px";
};

document.addEventListener("DOMContentLoaded", positionCarouselDots);
window.addEventListener("pageshow", positionCarouselDots);
window.addEventListener("resize", positionCarouselDots);
window.addEventListener("load", positionCarouselDots);
window.addEventListener("orientationchange", positionCarouselDots);
