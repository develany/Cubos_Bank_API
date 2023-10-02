const express = require('express');

//CONTAS
const { verificacaoSenha, verificarDados, verificarNumero, verificarSaldo } = require('./middlewares/contasIntermediadores');
const contasControlador = require('./controladores/contasControlador');

//CONTA
const { verificarContaSenha } = require('./middlewares/contaIntermediadores');
const contaControlador = require('./controladores/contaControlador');

//TRANSAÇÕES
const { verificarDadosDeposito, verificarDadosSaque, verificarDadosTransferencia } = require('./middlewares/transacoesIntermediadores');
const transacoesControlador = require('./controladores/transacoesControlador');


const rotas = express()

//Rotas referente as contas - CRUD
rotas.get('/contas', verificacaoSenha, contasControlador.listarContas)
rotas.post('/contas', verificarDados, contasControlador.criarConta)
rotas.put('/contas/:numeroConta/usuario', verificarDados, verificarNumero, contasControlador.alterarConta)
rotas.delete('/contas/:numeroConta', verificarNumero, verificarSaldo, contasControlador.deletarConta)

//Rotas referente a dados da conta
rotas.get('/contas/saldo', verificarContaSenha, contaControlador.consultarSaldo)
rotas.get('/contas/extrato', verificarContaSenha, contaControlador.consultarExtrato)

//Rotas referente as Transaçoes
rotas.post('/transacoes/depositar', verificarDadosDeposito, transacoesControlador.depositarNaConta)
rotas.post('/transacoes/sacar', verificarDadosSaque, transacoesControlador.sacarDaConta)
rotas.post('/transacoes/transferir', verificarDadosTransferencia, transacoesControlador.transferirEntreContas)

module.exports = rotas