$('form').on('submit', function (e) {
  e.preventDefault();
  const cadastroDeNovoItem = $('#novo-cadastro').val();
  const novoItem = $('#lista-de-itens');

  $(`<li>${cadastroDeNovoItem}</li>`).addClass("listas").appendTo(novoItem);
  $(`#novo-cadastro`).val('');
});

$('#lista-de-itens').on('click', 'li.listas', function () {
  if ($(this).hasClass("line-through")) {
    $(this).removeClass("line-through");
  } else {
    $(this).addClass("line-through");
  }
});




