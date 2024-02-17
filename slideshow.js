document.addEventListener("DOMContentLoaded", function () {
    let currentImageIndex = 0;
    const images = [
      "https://img.telemart.ua/img/banners/banner_new_ukr_3222.png",
      "https://img.telemart.ua/img/banners/banner_new_ukr_3283.png",
      "https://img.telemart.ua/img/banners/banner_new_ukr_3279.png"
    ];
  
    function changeImage(index) {
      const imageElements = document.getElementsByClassName("Foto");
      for (let i = 0; i < imageElements.length; i++) {
        imageElements[i].classList.add("animate-left");
      }
  
      setTimeout(() => {
        for (let i = 0; i < imageElements.length; i++) {
          imageElements[i].src = images[index];
        }
        currentImageIndex = index;
  
        setTimeout(() => {
          for (let i = 0; i < imageElements.length; i++) {
            imageElements[i].classList.remove("animate-left");
          }
        }, 20);
      }, 1000);
    }
  
    function nextSlide() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      changeImage(currentImageIndex);
    }
  
    function prevSlide() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      changeImage(currentImageIndex);
    }
  
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
  
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  
    setInterval(nextSlide, 3000);
  
    changeImage(currentImageIndex);
  });
  