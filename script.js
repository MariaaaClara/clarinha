const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a capital da França?",
        alternativas: [
            {
                texto: "China.",
                afirmacao: ""
            },
            {
                texto: "Japão.",
                afirmacao: ""
            },
            {
                texto: "Paris.",
                afirmação:""
            },
            {
                texto:"Tailândia.",
                afirmacao:""
            }
        ]
    },
    {
        enunciado: "Quem escreveu Dom Casmurro?",
        alternativas: [
            {
                texto: "Jorge Amado.",
                afirmacao: ""
            },
            {
                texto: "Machado De Assis.",
                afirmacao: ""
            },
            {
                texto:"Graciliano Ramos.",
                afirmacao:""
            },
            {
                texto:"José Saramago.",
                afirmacao:""
            }
        ]
    },
    {
        enunciado: "Qual é o famoso festival que acontece em Salvador, na Bahia?",
        alternativas: [
            {
                texto: "Festival de Cinema de Salvador.",
                afirmacao: ""
            },
            {
                texto: " Carnaval.",
                afirmacao: ""
            },
            {
                texto:"Festa de São João.",
                afirmacao:""            
            },
            {
                texto:"Festival de Música da Bahia.",
                afirmacao:""
            }
        ]
    },
    {
        enunciado: "Em que país se encontra a cidade de Kyoto?",
        alternativas: [
            {
                texto: "China.",
                afirmacao: ""
            },
            {
                texto: "Japão.",
                afirmacao: ""
            },
            {
                texto:"Coreia Do Sul.",
                afirmacao:""
            },
            {
                texto:"Tailândia.",
                afirmacao:""
            }
        ]
    },
    {
        enunciado: "Qual é o nome do famoso balé russo que inclui a peça O Lago dos Cisnes?",
    
        alternativas: [
            {
                texto: "Bolshoi.",
                afirmacao: ""
            },
            {
                texto: "Mariinsky.",
                afirmacao: ""
            },
            {
                texto:"Royal Ballet.",
                afirmacao:""
            },
            {
                texto:"Paris Opera Ballet.",
                afirmacao:""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigado por responder, Tenha um Bom Dia !!!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();