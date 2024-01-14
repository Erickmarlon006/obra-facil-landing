let botao = document.getElementById("btn");
var formulario = document.getElementsByName("lead").item(0);
let camposDoFormulario = document.getElementsByTagName("input");
let nameTextField = document.getElementById("name");

formulario.onsubmit = function (e) {
  e.preventDefault();
  let resposta = confirm("Todas as informações estão corretas?");
  if (resposta) {
    console.log("bora");
  } else {
    console.log("no");
    document.getElementById("message").textContent = "Revisa aí";
  }
  return resposta;
};
nameTextField.onkeydown = function () {
  document.getElementById("message").textContent = "Olá " + nameTextField.value;
  console.log("você está no campo do nome completo");
};
