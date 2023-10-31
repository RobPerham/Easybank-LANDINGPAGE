const btnHamburger = document.querySelector('#btnHamburger ');
const header = document.querySelector('header');
const overlay = document.querySelector('.overlay')


btnHamburger.addEventListener('click', function () {//close burger menu
  console.log('click hamburger')

  if (header.classList.contains('open')) {
    header.classList.remove('open');
    overlay.classList.remove('fade-in')
    overlay.classList.add('fade-out')
  }
  else {//OPEN hamburger menu
    header.classList.add('open');
    overlay.classList.remove('fade-out')
    overlay.classList.add('.overlay')

  }

});