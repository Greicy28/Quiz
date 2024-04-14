function validarFormulario() {
  var nome = document.getElementById("nome").value;
  var idade = document.getElementById("idade").value;
  var animal = document.querySelector('input[name="animal"]:checked');
  var redesSociais = document.querySelectorAll(
    'input[name="rede social"]:checked'
  );
  if (nome === "") {
    alert("Por favor, insira seu nome.");
    return false;
  }

  if (idade === "") {
    alert("Por favor, insira sua idade.");
    return false;
  }

  if (animal === null) {
    alert("Por favor, selecione seu animal favorito.");
    return false;
  }

  if (redesSociais.length === 0) {
    alert("Por favor, selecione pelo menos uma rede social que você gosta.");
    return false;
  }

  return true;
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  if (validarFormulario()) {
    this.submit();
  }
});
function processarResultados() {
  var contagemFacebook = document.getElementById("facebook").checked ? 1 : 0;
  var contagemInstagram = document.getElementById("instagram").checked ? 1 : 0;
  var contagemWhatsApp = document.getElementById("whatsapp").checked ? 1 : 0;

  var resultado = "";
  var totalRedesSociais =
    contagemFacebook + contagemInstagram + contagemWhatsApp;

  if (totalRedesSociais === 3) {
    resultado = "Você ama todas as redes sociais!";
  } else if (totalRedesSociais === 2) {
    resultado = "Você gosta de várias redes sociais, mas não de todas.";
  } else if (totalRedesSociais === 1) {
    resultado = "Você tem uma rede social favorita!";
  } else {
    resultado = "Parece que você não é fã de redes sociais.";
  }

  alert("Resultado do Quiz: " + resultado);
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  if (validarFormulario()) {
    processarResultados();
  }
});
