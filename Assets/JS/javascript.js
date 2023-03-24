document.getElementById('next').onclick = function() {
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft += (widthItem*3 + 60);
}

document.getElementById('prev').onclick = function() {
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft -= (widthItem*3 + 60);
}

// // slider product
// const slider = document.querySelector('#formList');
// const sliderContainer = slider.querySelector('#list');
// const productItem = slider.querySelectorAll('.item');

// let currentIndex = 0;
// let itemWidth = productItem[0].clientWidth;
// let containerWidth = itemWidth * productItem.length;

// sliderContainer.style.width = containerWidth + 'px';

// function slide() {
//   currentIndex++;
//   if (currentIndex > productItem.length - 3) {
//     currentIndex = 0;
//   }
//   sliderContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
// }

// setInterval(slide, 3000);


if (window.innerWidth < 376) {
    // slider product
const slider = document.querySelector('#formList');
const sliderContainer = slider.querySelector('#list');
const productItem = slider.querySelectorAll('.item');

let currentIndex = 0;
let itemWidth = productItem[0].clientWidth;
let containerWidth = itemWidth * productItem.length;

sliderContainer.style.width = containerWidth + 'px';

function slide() {
  currentIndex++;
  if (currentIndex > productItem.length - 1) {
    currentIndex = 0;
  }
  sliderContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

setInterval(slide, 3000);
}
