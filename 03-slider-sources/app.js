const container = document.querySelector('.container');
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const heightScreen = container.clientHeight;
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

const changeSlide = (direction) => {
  if(direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex > (slidesCount - 1)) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  mainSlide.style.transform = `translateY(-${activeSlideIndex * heightScreen}px)`
  sidebar.style.transform = `translateY(${activeSlideIndex * heightScreen}px)`
}

upBtn.addEventListener('click', () => {
  changeSlide('up');
})

downBtn.addEventListener('click', () => {
  changeSlide('down');
});
