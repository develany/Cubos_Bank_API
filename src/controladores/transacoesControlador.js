const transacoesSevico = require('../servicos/transacoesServico');

const depositarNaConta = async (req, res) => {
    try {
        const { numero_conta, valor } = req.body
        await transacoesSevico.depositar(numero_conta, valor)
        res.status(201).send()
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
const sacarDaConta = async (req, res) => {
    try {
        const { numero_conta, valor } = req.body
        await transacoesSevico.sacar(numero_conta, valor)
        res.status(201).send()
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
const transferirEntreContas = async (req, res) => {
    try {
        const { numero_conta_origem, numero_conta_destino, valor } = req.body
        await transacoesSevico.transferir(numero_conta_origem, numero_conta_destino, valor)
        res.status(201).send()
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports = {
    depositarNaConta,
    sacarDaConta,
    transferirEntreContas
}