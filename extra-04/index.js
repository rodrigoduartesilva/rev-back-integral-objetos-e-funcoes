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
        let extrato = `Extrato de ${this.nome} - Saldo: R$ ${this.saldo / 100}\nHistórico: `;

        console.log(extrato);
        for (let indice in this.historicos) {
            console.log(`${this.historicos[indice].tipo} de R$ ${this.historicos[indice].valor / 100}`);
        }

    }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
contaBancaria.extrato();