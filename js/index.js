const slides = document.getElementsByClassName('carousel-item')
let slidePosition = 0
const totalSlides = slides.length
var t

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide)
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide)

function hideAllSlides () {
  for (let slide of slides) {
    slide.classList.remove('carousel-item-visible')
    slide.classList.add('carousel-item-hidden')
  }
}

function moveToPrevSlide () {
  hideAllSlides()

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1
  } else {
    slidePosition--
  }

  slides[slidePosition].classList.remove('carousel-item-hidden')
  slides[slidePosition].classList.add('carousel-item-visible')
}

let timer = setInterval(autoMove, 6000)

function resetTimer () {
  clearInterval(timer)
  timer = setInterval(autoMove, 6000)
}

function moveToNextSlide () {
  hideAllSlides()

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0
  } else {
    slidePosition++
  }
  slides[slidePosition].classList.remove('carousel-item-hidden')
  slides[slidePosition].classList.add('carousel-item-visible')
  resetTimer()
}

function autoMove () {
  moveToNextSlide()
}
