listaPerguntas = [
{
    pergunta: "Quem foi o primeiro presidente do Brasil?",
    opcoes: [
        "Getúlio Vargas",
        "Juscelino",
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

let indicePergunta = 0;

function iniciarJogo() {
    indicePergunta = 0;
    telaInicial.style.display = "none";
    telaPergunta.style.display = "block";
    telaAcerto.style.display = "none";
    telaErro.style.display = "none";
    mostrarPergunta();
}

function mostrarPergunta() {
    objPergunta = listaPerguntas[indicePergunta];
    divPergunta.textContent = objPergunta.pergunta;
    botao0.textContent = objPergunta.opcoes[0];
    botao1.textContent = objPergunta.opcoes[1];
    botao2.textContent = objPergunta.opcoes[2];
    botao3.textContent = objPergunta.opcoes[3];
}

telaAcerto.addEventListener("click", () => {
    telaAcerto.style.display = "none";
    indicePergunta++;
    if (indicePergunta < listaPerguntas.length) {
        telaPergunta.style.display = "block";
        mostrarPergunta();
    } else {
        telaInicial.style.display = "block";
        telaPergunta.style.display = "none";
    }
});

telaErro.addEventListener("click", () => {
    telaErro.style.display = "none";
    indicePergunta++;
    if (indicePergunta < listaPerguntas.length) {
        telaPergunta.style.display = "block";
        mostrarPergunta();
    } else {
        telaInicial.style.display = "block";
        telaPergunta.style.display = "none";
    }
});

botao0.addEventListener("click", () => {
    if (objPergunta.correta == 0) { mostrarTelaAcerto() 
    } else { 
        mostrarTelaErro() }
});  

botao1.addEventListener("click", () => {
    if (objPergunta.correta == 1) { mostrarTelaAcerto() 
    } else { 
        mostrarTelaErro() }
});  

botao2.addEventListener("click", () => {
    if (objPergunta.correta == 2) { mostrarTelaAcerto() 
    } else { 
        mostrarTelaErro() }
});  

botao3.addEventListener("click", () => {
    if (objPergunta.correta == 3) { mostrarTelaAcerto() 
    } else { 
        mostrarTelaErro() }
}); 

function mostrarTelaAcerto() {
    telaPergunta.style.display = "none";
    telaAcerto.style.display = "block";
}

function mostrarTelaErro() {
    telaPergunta.style.display = "none";
    telaErro.style.display = "block";
}