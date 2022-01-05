let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.next').addEventListener('click', function(){
    offset = offset + 770;
    if (offset > 770) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.prev').addEventListener('click', function () {
    offset = offset - 770;
    if (offset < 0) {
        offset = 770;
    }
    sliderLine.style.left = -offset + 'px';
});