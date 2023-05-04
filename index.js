window.addEventListener("DOMContentLoaded", () => {
    split();
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      lerp: 0.01,
    });
    setTimeout(() => {
      scroll.update();
    }, 10);
  });
  