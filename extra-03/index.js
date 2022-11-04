const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ]
}

let itensCarrinho = 0;
let totalPagar = 0;

function imprimirResumoDoCarrinho(carrinho) {
    for (let item in carrinho.produtos) {
        itensCarrinho += carrinho.produtos[item].qtd;
        totalPagar += (carrinho.produtos[item].qtd * carrinho.produtos[item].precoUnit);
    }
    console.log(`Cliente: ${carrinho.nomeDoCliente} 
         Total de itens: ${itensCarrinho}
         Total a pagar: R$ ${((totalPagar) / 100).toFixed(2)}`);
}

imprimirResumoDoCarrinho(carrinho);