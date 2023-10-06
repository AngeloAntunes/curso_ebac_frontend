const tituloPrincipal = document.querySelector('#title');

tituloPrincipal.addEventListener('click', function () {
  if (tituloPrincipal.classList.contains('newColor')) {
    tituloPrincipal.classList.remove('newColor');
  } else {
    tituloPrincipal.classList.add('newColor');
  }
})

