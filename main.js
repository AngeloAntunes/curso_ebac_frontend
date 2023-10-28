document.addEventListener('DOMContentLoaded', function () {

  document.querySelector('#buscar').addEventListener('click', function () {
    let nomeInserido = document.querySelector('#git-link').value;
    let endpoint;

    nomeInserido = nomeInserido.replace('https://github.com/', '');
    endpoint = `https://api.github.com/users/${nomeInserido}`;

    const avatar = document.querySelector('#avatar');
    const nome = document.querySelector('#nome');
    const cargo = document.querySelector('#cargo')
    const nomeUsuarioGit = document.querySelector('#nomeUsuario');
    const repositorio = document.querySelector('#repositorio');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const linkPerfil = document.querySelector('#link-git-perfil');

    fetch(endpoint)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);
        avatar.src = json.avatar_url;
        nome.innerText = json.name;
        cargo.innerText = json.bio;
        nomeUsuarioGit.innerText = json.login;
        repositorio.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        linkPerfil.href = json.html_url;
      })
      .catch(function (erro) {
        console.error('Ocorreu um erro ao tentar localizar o perfil informado.', erro);
      })
      .finally();
  })

})