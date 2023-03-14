// customSelect('select')
const burgerMenu = document.querySelector('.burger')
burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active')
    document.querySelector('.nav-list').classList.toggle('open')
    document.querySelector('.burgerNotScroll').classList.toggle('hidden')
})
