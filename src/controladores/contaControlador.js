const constaSevico = require('../servicos/contaServico')
const consultarSaldo = async (req, res) => {
    try {
        const { numero_conta } = req.query
        const resposta = await constaSevico.buscarSaldo(numero_conta)
        res.status(200).json(resposta)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
const consultarExtrato = async (req, res) => {
    try {
        const { numero_conta } = req.query
        const resposta = await constaSevico.buscarExtrato(numero_conta)
        res.status(200).json(resposta)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
module.exports = {
    consultarSaldo,
    consultarExtrato
}