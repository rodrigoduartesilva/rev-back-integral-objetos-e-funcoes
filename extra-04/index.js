const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function (valor) {
        this.historicos.push({ tipo: "Deposito", valor: `${valor}` });
        this.saldo += valor;
        return `Deposito de R$ ${(valor) / 100} realizado para o cliente: ${this.nome}`;
    },

    sacar: function (valor) {
        if (this.saldo >= valor) {
            this.historicos.push({ tipo: "Saque", valor: `${valor}` });
            this.saldo -= valor;
            return `Saque de R$ ${valor / 100} realizado para o cliente: ${this.nome}`
        } else {
            return `Saldo insuficiente para o saque de: ${this.nome}`;
        }
    },

    extrato: function () {
        return `
            Extrato de ${this.nome} - Saldo: R$ ${this.saldo}
            Histórico:
            ${
                for (let item = 0; item < this.historicos.length; item++) {
            ``
        }
    }

        `
    }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(500));
console.log(`Saldo: ${ contaBancaria.saldo / 100}`);
console.log(contaBancaria.historicos);