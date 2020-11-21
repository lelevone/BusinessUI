document.querySelector('.header__burger').onclick = () => {
  document.querySelector('.header__burger').classList.toggle('active');
  document.querySelector('.burger__menu').classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');

}

