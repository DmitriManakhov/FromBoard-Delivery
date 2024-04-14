$('.reviews__slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<img class="slider-cite__arrow-left" src="img/arrow_left.svg"></img>',
  nextArrow: '<img class="slider-cite__arrow-right" src="img/arrow_right.svg">',
  responsive: [
    {
      breakpoint: 1091,
      settings: {
        slidesToShow: 1,
      }
    }
]
});

let inputsCalc = document.querySelectorAll('.calc__form_item');
let inputsQuestions = document.querySelectorAll('.questions__form_item');
let ariaQuestions = document.querySelector('.aria');
let headerBtn = document.querySelector('.header-nav__btn');
let worldBtn = document.querySelector('.calc__form_btn');
let docBtn = document.querySelector('.guarantees__btn_link');
let btnQuestions = document.querySelector('.questions__btn');
let burgerBtnOpen = document.querySelector('.menu__burger');
let burger = document.querySelector('.burger__content');
let logo = document.querySelector('.header__logo');
let burgerBtnClose = document.querySelector('.burger__close_btn');
let world = document.querySelector('.world');

for (let inp of inputsCalc) {
  inp.addEventListener('click', function () {
    inp.classList.add('color_click');
  });
  inp.addEventListener('blur', function () {
    inp.classList.remove('color_click');
  })
};

for (let inp of inputsQuestions) {
  inp.addEventListener('click', function func() {
    inp.classList.add('color_click');
  });
  inp.addEventListener('blur', function () {
    inp.classList.remove('color_click');
  })
};

ariaQuestions.addEventListener('click', function () {
  ariaQuestions.classList.add('color_click');
});
ariaQuestions.addEventListener('blur', function () {
  ariaQuestions.classList.remove('color_click');
});

function blur() {
  this.classList.add('btn__blur');
};


headerBtn.addEventListener('click', blur);

worldBtn.addEventListener('click', blur);

docBtn.addEventListener('click', blur);

btnQuestions.addEventListener('click', blur);


burgerBtnOpen.addEventListener('click', function () {
  burger.classList.add('burger__content_open');
  world.classList.add('world__margin');
});

burgerBtnClose.addEventListener('click', function () {
  burger.classList.remove('burger__content_open');
  world.classList.remove('world__margin');
});


