const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

let soma = 0;

function corrigirProva(prova) {
    for (let i in prova.questoes) {
        if (prova.questoes[i].resposta === prova.questoes[i].correta) {
            soma++;
        }
    }

    return soma;
}

const resultado = corrigirProva(prova);

console.log(`O aluno(a) ${prova.aluno} acertou ${resultado} questões e obteve nota ${resultado * 2}.`);