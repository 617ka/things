// script.js
let slidesContainer = document.querySelector('.slides');
let nextButton = document.querySelector('.next-button');
let slideWidth = document.querySelector('.slide').clientWidth; // Adjust if needed
let slideIndex = 0;

function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
    if(slideIndex < slidesContainer.children.length - 1){
        slideIndex = slideIndex + 1;
    }else{
        slideIndex = 0;
    }
    console.log(slideIndex);
    showSlide(slideIndex);
});

// Initial slide display
showSlide(slideIndex);
