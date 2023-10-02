const dados = require('../bancodedados')
const { format } = require('date-fns');


const deposito = (numero_conta, valor) => {
    dados.contas = dados.contas.map((conta) => {

        if (conta.numero === Number(numero_conta)) {
            return {
                numero: conta.numero,
                saldo: conta.saldo + valor,
                usuario: conta.usuario
            }

        } else {
            return conta
        }

    })

    const registro = {
        data: format(new Date(), 'yyyy-mm-dd HH:mm:ss'),
        numero_conta,
        valor
    }
    dados.depositos.push(registro)
};
const saque = (numero_conta, valor) => {
    dados.contas = dados.contas.map((conta) => {

        if (conta.numero === Number(numero_conta)) {
            return {
                numero: conta.numero,
                saldo: conta.saldo - valor,
                usuario: conta.usuario
            }

        } else {
            return conta
        }
    })
    const registro = {
        data: format(new Date(), 'yyyy-mm-dd HH:mm:ss'),
        numero_conta,
        valor
    }
    dados.saques.push(registro)
};
const transferencia = (numero_conta_origem, numero_conta_destino, valor) => {
    dados.contas = dados.contas.map((conta) => {

        if (conta.numero === Number(numero_conta_origem)) {
            return {
                numero: conta.numero,
                saldo: conta.saldo - valor,
                usuario: conta.usuario
            }

        } else if (conta.numero === Number(numero_conta_destino)) {
            return {
                numero: conta.numero,
                saldo: conta.saldo + valor,
                usuario: conta.usuario
            }

        } else {
            return conta
        }

    })
    const registro = {
        data: format(new Date(), 'yyyy-mm-dd HH:mm:ss'),
        numero_conta_origem,
        numero_conta_destino,
        valor
    }
    dados.transferencias.push(registro)
};
module.exports = {
    deposito,
    saque,
    transferencia
};
