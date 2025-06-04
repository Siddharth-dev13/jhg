document.addEventListener("DOMContentLoaded", function () {
    let slideshow = document.querySelector(".slideshow");
    let images = document.querySelectorAll(".slideshow img");
    let index = 0;

    function slide() {
        index = (index + 1) % images.length;
        slideshow.style.transform = `translateX(-${index * 100}vw)`;
    }

    setInterval(slide, 5000);
});
