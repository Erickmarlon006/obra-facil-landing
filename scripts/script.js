let botao = document.getElementById("btn");
var formulario = document.getElementsByName("lead").item(0);
let camposDoFormulario = document.getElementsByTagName("input");
let nameTextField = document.getElementById("name");

formulario.onsubmit = function(){
    let resposta = confirm("Todas as informações estão corretas?");
    if (resposta){
        console.log("bora");

    }else{
        console.log("no");
        document.getElementById("message").textContent = "Revisa aí";
       
        
    }

}
nameTextField.onkeydown = function(){
    document.getElementById("message").textContent = "Olá " + nameTextField.value;
    console.log("você está no campo do nome completo");
}
/*
console.log(botao);
console.log(botao.innerHTML);
type="submit" value="FALE CONOSCO" id="btn"/>
console.log(formulario.item(0).name);
console.log(formulario);

console.log("quantos campos tem o form?", camposDoFormulario.length);
console.log(camposDoFormulario.name);
console.log(camposDoFormulario.email);
console.log(camposDoFormulario.phone);
var tamanho = 10
botao.onclick = function(){
    botao.style.fontSize = ++tamanho +"px";

}
/*/
/*

/*/





/*
let url = window.document.URL;
console.log(" Esse é o link do meu site " + url);
console.log(document.doctype.name);
console.log(document.title);
console.log(document.characterSet);




let url = document.URL;
console.log("Estou na Página " + url);
console.log("Estou na Página " + document.doctype.name);
console.log("Estou na Página " + document.title);
console.log("Estou na Página " + document.characterSet);
let resposta = confirm("OK");
/*/
