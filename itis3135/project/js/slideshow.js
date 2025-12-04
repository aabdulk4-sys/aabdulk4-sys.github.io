

document.addEventListener("DOMContentLoaded", () => {
    const images = [
      "images/sunsetbmw.jpg",
      "images/nightcars.jpg",
      "images/carlineup.jpg"
    ];
  
    let current = 0;
    const slide = document.getElementById("slide");
    if (!slide) return; // safety
  
    function showSlide() {
      slide.src = images[current];
    }
  
    window.nextSlide = function () {
      current = (current + 1) % images.length;
      showSlide();
    };
  
    window.prevSlide = function () {
      current = (current - 1 + images.length) % images.length;
      showSlide();
    };
  
    // initial display
    showSlide();
  
    // auto-advance every 4 seconds
    setInterval(window.nextSlide, 4000);
  });
  