const bt = document.querySelector('#bt-click');

bt.addEventListener('click', function () {
  let text = document.querySelector('#new-text');
  text.classList.add('new__text--active');
  text.innerText = 'Olá, porque você clicou?';
})