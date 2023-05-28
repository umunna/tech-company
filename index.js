window.addEventListener("DOMContentLoaded", () => {
    split();
    const scroll = new LocomotiveScroll({
      smooth: true,
      lerp: 0.01,
    });
    setTimeout(() => {
      scroll.update();
    }, 10);
  });
  
