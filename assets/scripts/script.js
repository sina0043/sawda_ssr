const mobileMenu = document.getElementById('mobile-menu');
const searchMenuMobile = document.getElementById('search-menu-mobile')
const myDropdown = document.getElementById('myDropdown')
const dropdownBox = document.getElementById('drop-box-item')





//toggle menu 

function toggleMenu () {
    mobileMenu.classList.toggle('active')
}

//search item

function srch(){
searchMenuMobile.classList.toggle('show')
}

//click on button open dropdown and choose language

function chooseLanguage() {
myDropdown.classList.toggle('open')
}

//click on button open dropdown and choose new content

function chooseNew () {
    dropdownBox.classList.toggle('open')
}