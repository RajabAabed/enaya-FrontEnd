const sliderText = document.querySelectorAll(".text-box-item");
const sliderImages = document.querySelectorAll(".img-box-item");
const dotsBox = document.querySelector(".dots-box");

function autoplaySlider(interval) {
  let totalSlides = 0;
  if (sliderImages.length === sliderText.length) {
    totalSlides = sliderImages.length;
  } else if (sliderImages.length > sliderText.length) {
    totalSlides = sliderText.length;
  } else if (sliderImages.length < sliderText.length) {
    totalSlides = sliderImages.length;
  }
  console.log(totalSlides);
  for (let i = 0; i < totalSlides; i++) {
    classes = "dots-box-item w-[10px] h-[10px] rounded-full m-1";
    if (i === 0) {
      classes =
        "dots-box-item dots-box-item-active w-[10px] h-[10px] rounded-full m-1";
    }
    const dot = document.createElement("div");
    dot.setAttribute("class", classes);
    dotsBox.appendChild(dot);
  }

  let currentIndex = 0;

  function showNextSlide() {
    const dotsBoxItem = document.querySelectorAll(".dots-box-item");
    sliderText[currentIndex].classList.remove("active");
    sliderImages[currentIndex].classList.remove("active");
    dotsBoxItem[currentIndex].classList.remove("dots-box-item-active");
    currentIndex = (currentIndex + 1) % totalSlides;
    sliderText[currentIndex].classList.add("active");
    sliderImages[currentIndex].classList.add("active");
    dotsBoxItem[currentIndex].classList.add("dots-box-item-active");
  }
  setInterval(showNextSlide, interval);
}

//  7S
autoplaySlider(7000);
document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("img.lazy");

  const lazyLoad = (image) => {
    image.src = image.dataset.src;
    image.addEventListener("load", () => {
      image.classList.add("loaded");
    });
  };

  if ("IntersectionObserver" in window) {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lazyLoad(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    lazyImages.forEach((img) => {
      observer.observe(img);
    });
  } else {
    // Fallback for older browsers
    lazyImages.forEach((img) => {
      lazyLoad(img);
    });
  }
});
