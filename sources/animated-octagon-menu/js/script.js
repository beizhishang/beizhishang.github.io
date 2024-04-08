const menuToggle = document.querySelector('.menuToggle'),
      menu       = document.querySelector('.menu')

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('active')
})


