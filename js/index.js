const slides = document.getElementsByClassName('carousel-item')
let slidePosition = 0
const totalSlides = slides.length

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
  resetTimer()
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

// key and keyCode used for compatibility

window.addEventListener('keydown', function (e) {
  e.preventDefault()
  let key = e.key,
    keyCode = e.keyCode

  if (key === 'ArrowRight' || keyCode === 39) {
    moveToNextSlide()
  } else if ((key && 'ArrowLeft' === key) || keyCode === 37) {
    moveToPrevSlide()
  }
})
