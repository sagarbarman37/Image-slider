const rightArr = document.querySelector('.right');
const leftArr = document.querySelector('.left');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');

let slideNum = 1;
const length = images.length;

const nextSlide = ()=>{
  slider.style.transform = `translateX(-${slideNum*250}px)`;
    slideNum++;
 };
 
const getFirstSlide = ()=>{
  slider.style.transform = `translateX(0px)`;
    slideNum = 1;
};

rightArr.addEventListener('click', ()=>{
  slideNum < length ? nextSlide() :  getFirstSlide();
});

const prevSlide = ()=>{
  slider.style.transform = `translateX(-${(slideNum-2)*250}px)`;
  slideNum--;
};

const prevLastSlide = ()=>{
  slider.style.transform = `translateX(-${(length-1)*250}px)`;
  slideNum = length;
};

leftArr.addEventListener('click', ()=>{
  slideNum > 1 ? prevSlide() : prevLastSlide();
});