export const burger = () => {

    const menuBtn = document.querySelector('.header__btn')
    const menu = document.querySelector('.header__menu')
    const burgerBtn = document.querySelector('.menu__burger__btn')

    const moveMenu = () => {
        menu.classList.toggle('header__menu-active')
        burgerBtn.classList.toggle('menu__burger__btn-active')
        menuBtn.classList.toggle('header__btn-disabled')
    }

    document.querySelector('.header').addEventListener('click', (e) => {

        if (e.target.closest('.header__btn') || e.target.closest('.menu__burger__btn')) {
            moveMenu()
        }

        if (e.target.matches('.menu__element>a')) {
            moveMenu()
        }

    })
}