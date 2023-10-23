export const menuToggle = () => {
  const menuButton = document.querySelector('.header__menu-button');
  const headerBottom = document.querySelector('.header__bottom');


  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('change');
    headerBottom.classList.toggle('change');
  })

}