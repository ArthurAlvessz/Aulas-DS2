listaPerguntas = [
{
    pergunta: "Quem foi o primeiro presidente do Brasil?",
    opcoes: [
        "Getúlio Vargas",
        "Juscelino Kubitschek",
        "Deodoro da Fonseca",
        "Washington Luís"
    ],
    correta: 2
},    
{
    pergunta: "Qual o maior planeta do sistema solar?",
    opcoes: [
        "Terra",
        "Júpiter",
        "Saturno",
        "Marte"
    ],
    correta: 1    
},  
{
    pergunta: "Qual foi a primeira capital do Brasil?",
    opcoes: [
        "Rio de Janeiro",
        "Salvador",
        "Brasília",
        "Olinda"
    ],
    correta: 1    
}
]

objPergunta = null

telaInicial = document.querySelector(".tela-inicial")
telaPergunta = document.querySelector(".tela-pergunta")

telaAcerto = document.querySelector(".tela-acerto")
telaErro = document.querySelector(".tela-erro")

botaoIniciar = document.querySelector(".iniciar")
botaoIniciar.addEventListener("click", iniciarJogo)

divPergunta = document.querySelector(".pergunta");

botao0 = document.querySelector(".opcao0")
botao1 = document.querySelector(".opcao1")
botao2 = document.querySelector(".opcao2")
botao3 = document.querySelector(".opcao3")

telaAcerto.addEventListener("click", () => {
    telaAcerto.style.display = "none"
    iniciarJogo()
})

botao0.addEventListener("click", () => {
    if (objPergunta.correta == 0) { mostrarTelaAcerto() 
    } else { 
        mostrarTelaErro  () }
})  

botao1.addEventListener("click", () => {
    if (objPergunta.correta == 1) { mostrarTelaAcerto() 
    } else { 
        mostrarTelaErro  () }
})  

botao2.addEventListener("click", () => {
    if (objPergunta.correta == 2) { mostrarTelaAcerto() 
    } else { 
        mostrarTelaErro  () }
})  

botao3.addEventListener("click", () => {
    if (objPergunta.correta == 3) { mostrarTelaAcerto() 
    } else { 
        mostrarTelaErro  () }
}) 

function iniciarJogo() {

    telaInicial.style.display = "none"

    telaPergunta.style.display = "block"

    mostrarPergunta()

}

function mostrarPergunta() {
    objPergunta = listaPerguntas[0]

    textoPergunta = document.createTextNode(objPergunta.pergunta);

    divPergunta.appendChild(textoPergunta);

    txtOpcao1 = document.createTextNode(objPergunta.opcoes[0]);
    txtOpcao2 = document.createTextNode(objPergunta.opcoes[1]);
    txtOpcao3 = document.createTextNode(objPergunta.opcoes[2]);
    txtOpcao4 = document.createTextNode(objPergunta.opcoes[3]);
    
    botao0.appendChild(txtOpcao1);
    botao1.appendChild(txtOpcao2);
    botao2.appendChild(txtOpcao3);
    botao3.appendChild(txtOpcao4);
}

function mostrarTelaAcerto() {
    telaPergunta.style.display = "none"
    telaAcerto.style.display = "block"
}

function mostrarTelaErro() {
    telaPergunta.style.display = "none"
    telaErro.style.display = "block"
}