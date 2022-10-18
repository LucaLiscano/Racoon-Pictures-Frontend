let artSlider = () => {
  const slider = document.getElementById("slider");
  const sliderWidth = slider.offsetWidth;
  const slideList = document.getElementById("slideWrap");
  let count = 1;
  let items = slideList.querySelectorAll("li").length;
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  const prevSlide = function () {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = 1)) {
      count = count - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  const nextSlide = function () {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = items)) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  next.addEventListener("click", function () {
    nextSlide();
  });

  prev.addEventListener("click", function () {
    prevSlide();
  });

  setInterval(function () {
    nextSlide();
  }, 5000);
};

window.onload = function () {
  artSlider();
};
