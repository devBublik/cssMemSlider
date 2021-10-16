/* Индекс слайда по умолчанию */
let slideIndex = 0;
let dots = document.querySelectorAll(".slider__dot");
let slides = document.querySelectorAll(".slider__item");
let i;

showSlides(slideIndex);

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    if (n > slides.length-1) {
      slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length-1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add('active');
}

dots.forEach(function (dot, i){
	dot.addEventListener('click', function(){
		slideIndex = i;
		currentSlide(i);
	});
});

