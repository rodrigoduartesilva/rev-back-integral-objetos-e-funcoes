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
    ],

    imprimirResumo: function () {
        let itensCarrinho = 0;
        let totalPagar = 0;

        for (let item in this.produtos) {
            itensCarrinho += this.produtos[item].qtd;
            totalPagar += (this.produtos[item].qtd * this.produtos[item].precoUnit);
        }
        console.log(`Cliente: ${this.nomeDoCliente} 
         Total de itens: ${itensCarrinho}
         Total a pagar: R$ ${((totalPagar) / 100).toFixed(2)}`);
    }
}

carrinho.imprimirResumo();