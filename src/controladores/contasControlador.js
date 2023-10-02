const constasSevico = require('../servicos/contasServico')
const listarContas = async (req, res) => {
    try {
        const resposta = await constasSevico.listar()
        res.status(200).send(resposta)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
const criarConta = async (req, res) => {
    try {
        const usuario = req.body
        await constasSevico.criar(usuario)
        res.status(201).send()
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
const alterarConta = async (req, res) => {
    try {
        const { numeroConta } = req.params
        const usuario = req.body
        await constasSevico.atualizar(usuario, numeroConta)
        res.status(204).send()
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
const deletarConta = async (req, res) => {
    try {
        const { numeroConta } = req.params
        await constasSevico.deletar(numeroConta)
        res.status(204).send()
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}


module.exports = {
    listarContas,
    criarConta,
    alterarConta,
    deletarConta
}
