// tslint:disable:variable-name

// modificar de acordo com o que for recebido via service
// descobrir se é necessário

import { generateRetornoCnab } from './retorno'
import { isCNPJ, isCPF } from 'brazilian-values'
import dayjs from 'dayjs'
import { sumBy } from 'lodash'

export function helperGenerateRetornoCNAB400(dadosGeracao: any, bankCode: any) {
  const Return: any = []
  let numeroSequencial = 0

  /**
   * Header - Arquivo
   */
  numeroSequencial++
  const headerArquivo: any = {
    codigoConvenio: dadosGeracao.codigoConvenio,
    nomeEmpresa: dadosGeracao.nomeEmpresa,
    dataGeracao: dayjs(dadosGeracao.dataGeracao).format('DDMMYYYY'),
    numeroSequencial: Number(numeroSequencial)
  }

  Return.push({ headerArquivo })

  /**
   * Detalhe Segmento
   */
  dadosGeracao.detalheSegmento.forEach((detalheSegmento: any) => {
    numeroSequencial++
    let sacadoCodigoInscricao = 99

    if (isCPF(detalheSegmento.sacadoNumeroInscricao)) sacadoCodigoInscricao = 1
    if (isCNPJ(detalheSegmento.sacadoNumeroInscricao)) sacadoCodigoInscricao = 2

    const detalhe = {
      codigoInscricao: isCNPJ(dadosGeracao.numeroInscricao) ? 2 : 1,
      numeroInscricao: dadosGeracao.numeroInscricao,
      codigoConvenio: dadosGeracao.codigoConvenio,
      usoEmpresa: detalheSegmento.usoEmpresa,
      mensagem: detalheSegmento.mensagem,
      numeroDocumento: detalheSegmento.numeroDocumento,
      vencimento: dayjs(detalheSegmento.vencimento).format('DDMMYYYY'),
      valorTitulo: detalheSegmento.valorTitulo,
      dataEmissao: dayjs(detalheSegmento.dataEmissao).format('DDMMYYYY'),
      sacadoCodigoInscricao,
      sacadoNumeroInscricao: detalheSegmento.sacadoNumeroInscricao,
      nome: detalheSegmento.nome,
      logradouro: detalheSegmento.logradouro,
      bairro: detalheSegmento.bairro,
      cep: detalheSegmento.cep,
      cidade: detalheSegmento.cidade,
      estado: detalheSegmento.estado,
      numeroSequencial: Number(numeroSequencial)
    }

    Return.push({ detalhe })
  })

  /**
   * Trailler Arquivo
   */
  numeroSequencial++
  const trailerArquivo = {
    valorTotal: sumBy(dadosGeracao.detalheSegmento, (Row: any) => Number(Row.valorTitulo)),
    numeroSequencial: Number(numeroSequencial)
  }

  Return.push({ trailerArquivo })

  return Return.map((Row: any) => generateRetornoCnab(Row, 400, bankCode)).join('\n')
}
