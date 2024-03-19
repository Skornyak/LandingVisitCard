const btnAbout = document.querySelector('.about__btn');
const modalWindowAbout = document.querySelector('.modal__about');
const modalCloseButton = document.querySelector('.about__modal_button');

btnAbout.addEventListener('click', () => {
    modalWindowAbout.classList.add('active__modal_about')
})

modalCloseButton.addEventListener('click', () => {
    modalWindowAbout.classList.remove('active__modal_about');
});



