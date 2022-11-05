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

    calcularTotalDeItens: function () {
        let totalDeItens = 0;
        for (let item = 0; item < this.produtos.length; item++) {
            totalDeItens += this.produtos[item].qtd;
        }

        return totalDeItens;
    },

    calcularTotalAPagar: function () {
        let totalASerPago = 0;
        for (let item = 0; item < this.produtos.length; item++) {
            totalASerPago += (this.produtos[item].qtd * this.produtos[item].precoUnit);
        }

        return (totalASerPago / 100).toFixed(2);
    },

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
    },

    imprimirDetalhes: function () {
        let novoItem = 1;
        let totalItens = 0;
        totalPagar = 0;
        console.log(`Cliente: ${this.nomeDoCliente}\n`);
        for (let item = 0; item < this.produtos.length; item++) {
            console.log(`Item ${novoItem} - ${this.produtos[item].nome} - ${this.produtos[item].qtd} und - R$ ${((this.produtos[item].precoUnit * this.produtos[item].qtd) / 100).toFixed(2)}`);
            totalItens += this.produtos[item].qtd;
            totalPagar += (this.produtos[item].precoUnit * this.produtos[item].qtd);
            novoItem++;
        }
        console.log(`\nTotal de itens: ${totalItens}`);
        console.log(`Total a pagar: R$ ${((totalPagar) / 100).toFixed(2)}`);
    },

    addProduto: function (produto) {
        let indiceEncontrado = -1;

        for (let item = 0; item < this.produtos.length; item++) {
            if (this.produtos[item].id === produto.id) {
                indiceEncontrado = item;
                break;
            }
        }

        if (indiceEncontrado === -1) {
            this.produtos.push(produto);
        } else {
            this.produtos[indiceEncontrado].qtd += produto.qtd;
        }
    }
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

/*
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
*/

console.log(carrinho.calcularTotalAPagar());

//carrinho.imprimirDetalhes();

//carrinho.addProduto(novoTenis);

//carrinho.imprimirResumo();

//console.log(carrinho.produtos);