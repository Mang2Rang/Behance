const swiper = new Swiper('.swiper', {
  slidesPerView: 6,
  spaceBetween: 20,
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

});

const swSlide = document.querySelectorAll('.swiper-slide')
const Show = document.querySelectorAll('.title')

swSlide.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('selected')) {
      item.classList.remove('selected')
    } else {
      swSlide.forEach(item => {
        item.classList.remove('selected')
      })
      item.classList.add('selected')
      Show.forEach(item2=>{
        item2.classList.remove('show')
      })
    }
    Show[index].classList.add('show')
  })
})