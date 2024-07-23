document.addEventListener("DOMContentLoaded", function () {
  function autoplaySlider(interval) {
    const sliderText = document.querySelectorAll(".text-box-item");
    const sliderImages = document.querySelectorAll(".img-box-item");
    const dotsBox = document.querySelector(".dots-box");
    const totalSlides = Math.min(sliderImages.length, sliderText.length);

    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("div");
      dot.className = "dots-box-item w-[10px] h-[10px] rounded-full m-1";
      if (i === 0) {
        dot.classList.add("dots-box-item-active");
      }
      dotsBox.appendChild(dot);
    }

    let currentIndex = 0;

    function showNextSlide() {
      sliderText[currentIndex].classList.remove("active");
      sliderImages[currentIndex].classList.remove("active");
      dotsBox.children[currentIndex].classList.remove("dots-box-item-active");

      currentIndex = (currentIndex + 1) % totalSlides;

      sliderText[currentIndex].classList.add("active");
      sliderImages[currentIndex].classList.add("active");
      dotsBox.children[currentIndex].classList.add("dots-box-item-active");
    }

    setInterval(showNextSlide, interval);
  }

  // Start the slider with a 7-second interval
  autoplaySlider(7000);

  const lazyImages = document.querySelectorAll("img.lazy");

  function lazyLoad(image) {
    image.src = image.dataset.src;
    image.addEventListener("load", () => {
      image.classList.add("loaded");
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, observer) => {
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
    lazyImages.forEach((img) => {
      lazyLoad(img);
    });
  }

  const button = document.querySelector('button[data-drawer-target="sidebar"]');
  const sidebar = document.getElementById("sidebar");

  button.addEventListener("click", () => {
    const backdropElement = document.querySelector("[drawer-backdrop]");
    const newDiv = document.createElement("div");

    if (sidebar.classList.contains("translate-x-0")) {
      sidebar.classList.replace("translate-x-0", "translate-x-full");
      if (backdropElement) backdropElement.remove();
      if (window.innerWidth > 640) backdropElement.remove();
    } else {
      document.body.classList.add("overflow-hidden");
      sidebar.classList.replace("translate-x-full", "translate-x-0");
      newDiv.setAttribute("drawer-backdrop", "");
      newDiv.className =
        "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30";
      document.body.appendChild(newDiv);
    }
  });

  const handleBackdrop = () => {
    const backdropElement = document.querySelector("[drawer-backdrop]");
    if (window.innerWidth > 640 && backdropElement) {
      backdropElement.remove();
    }
  };
  window.addEventListener("resize", handleBackdrop);

  document.querySelectorAll("[data-collapse-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(
        button.getAttribute("data-collapse-toggle")
      );
      target.classList.toggle("hidden");
    });
  });
});
