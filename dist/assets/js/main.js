document.addEventListener("DOMContentLoaded", function () {
  // silder
  const sliderText = document.querySelectorAll(".text-box-item");
  const sliderImages = document.querySelectorAll(".img-box-item");
  const dotsBox = document.querySelector(".dots-box");
  if (sliderText) {
    function autoplaySlider(interval) {
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
  }

  // lazyload
  const lazyImages = document.querySelectorAll("img.lazy");
  if (lazyImages) {
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
  }

  // sidebar
  const button = document.querySelector('button[data-drawer-target="sidebar"]');
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    button.addEventListener("click", () => {
      const backdropElement = document.querySelector("[drawer-backdrop]");
      const newDiv = document.createElement("div");

      if (sidebar.classList.contains("translate-x-0")) {
        sidebar.classList.replace("translate-x-0", "translate-x-full");
        document.body.classList.remove("overflow-hidden");
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
  }
  // tabs code
  const tabButtons = document.querySelectorAll("[data-tabs-target]");
  const tabContents = document.querySelectorAll(
    "#default-styled-tab-content > div"
  );
  const tabContainer = document.getElementById("default-styled-tab");
  if (tabContainer) {
    const activeClasses = tabContainer
      .getAttribute("data-tabs-active-classes")
      .split(" ");
    const inactiveClasses = tabContainer
      .getAttribute("data-tabs-inactive-classes")
      .split(" ");

    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Deactivate all tab buttons and hide all tab content
        tabButtons.forEach((btn) => {
          btn.classList.remove(...activeClasses);
          btn.classList.add(...inactiveClasses);
          btn.setAttribute("aria-selected", "false");
        });

        tabContents.forEach((content) => {
          content.classList.add("hidden");
        });

        // Activate the clicked tab button and show the corresponding tab content
        this.classList.add(...activeClasses);
        this.classList.remove(...inactiveClasses);
        this.setAttribute("aria-selected", "true");

        const target = document.querySelector(
          this.getAttribute("data-tabs-target")
        );

        target.classList.remove("hidden");
      });
    });

    // Activate the first tab by default
    if (tabButtons.length > 0) {
      tabButtons[0].click();
    }
  }
  // model

  const openModalButton = document.querySelector(
    '[data-modal-target="login-modal"]'
  );
  if (openModalButton) {
    const modal = document.getElementById("login-modal");
    const closeModalButton = modal.querySelector(
      '[data-modal-hide="login-modal"]'
    );

    const newDiv = document.createElement("div");
    // Function to open the modal
    function openModal() {
      newDiv.setAttribute("drawer-backdrop", "");
      newDiv.className =
        "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30";
      document.body.appendChild(newDiv);
      modal.classList.add("flex");
      modal.classList.remove("hidden");
    }

    // Function to close the modal
    function closeModal() {
      const backdropElement = document.querySelector("[drawer-backdrop]");
      console.log(backdropElement);
      if (backdropElement) backdropElement.remove();
      modal.classList.remove("flex");
      modal.classList.add("hidden");
    }

    // Add event listeners for opening and closing the modal
    openModalButton.addEventListener("click", openModal);
    closeModalButton.addEventListener("click", closeModal);

    // Optional: Add an event listener to close the modal when clicking outside of it
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  }
});
