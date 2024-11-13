const slideImg = document.querySelectorAll(".slide_pic");
const buttonNext = document.querySelector(".slide_next");
const buttonPrev = document.querySelector(".slide_prev");
let currentSlide = 0;

function showSlide(index) {
	slideImg.forEach((img, 1) => {
		img.style.display = i === index ? "block" : "none";
	});
}

buttonNext.addEventListener("click", function() {
	currentSlide = (currentSlide + 1) % slideImg.length;
	showSlide(currentSlide);
});

buttonPrev.addEventListener("click", function() {
	currentSlide = (currentSlide - 1 + slideImg.length) % slideImg.length;
	showSlide(currentSlide);
});

showSlide(currentSlide);
});