// Crie um formulário HTML ---- FEITO
// Ele deve conter dois campos numéricos, campo A e campo B ---- FEITO
// Crie um botão para submeter o formulário ---- FEITO

/* Crie uma validação no JavaScript onde o formulário será válido caso
o campo B, seja maior que o campo A */

/* Exiba uma mensagem positiva quando o formulário for válido */
/* Exiba uma mensagem negativa quando o formulário for inválido */

const form = document.getElementById('form-number');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
let numeros = false;

function comparaNumero(a, b) {
  let compare = a < b;
  return compare;
}

campoB.addEventListener('keyup', (e) => {
  e.preventDefault();
  numeros = comparaNumero(campoA.value, campoB.value);
  
  if (!numeros) {
    campoB.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
  }else{
    campoB.style.border = '';
    document.querySelector('.error-message').style.display = 'none';
  }
})

form.addEventListener('submit',  (e) => {
  e.preventDefault();  
  if (numeros) {
    let containerMensagemSucesso = document.querySelector('.sucess-message');
    containerMensagemSucesso.style.display = 'block';

    let containerEnvio = document.querySelector('.send-message');
    containerEnvio.style.display = 'none';

    campoA.value = '';
    campoB.value = '';
    setTimeout(() => {
      window.location.reload();
    },3000)    
  }  
}); 




















