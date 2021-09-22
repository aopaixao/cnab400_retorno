## Descrição

Projeto utilizando Node.js + NesteJs para geração de arquivo de retorno CNAB400

## Instalação

```bash
$ npm install
```

## Executando a aplicação

```bash
# development com modo watch
$ npm run start:dev
```

## Acessando a API para geração do Código CNAB400 (GraphQL Playground)

```bash
# Mutation

mutation{
  generateCnab400(
    fileLayoutInput: {
      headerRetornoInput: {
        numeroAgencia: "104"
        dvAgencia: "1"
        conta: "001236"
        dvCedente: "2"
        nomeCedente: "FULANO DA SILVA"
        dataGravacao: "210921"
        sequencialRetorno: "23100"
        numeroConvenio: "15"
      },
      detalheRetornoInput:[
        {
        prefixoAgencia: "004"
        dvAgencia: "6"
        conta: "2569887"
        dvConta: "7"
        convenio: "2262"
        numeroControle: "236"
        nossoNumero: "25697"
        tipoCobranca: "2"
        tipoCobrancaEspecifico: "2"
        dias: "17"
        naturezaRecebimento: "01"
        prefixoBoleto: "003"
        varicaoCarteira: "112"
        contaCaucao: "2"
        taxaDesconto: "16"
        taxaIOF: "16"
        carteira: "03"
        comando: "03"
        dataLiquidacao: "210922"
        numeroBoleto: "0001156"
        dataVencimento: "210922"
        valorBoleto: "50,85"
        codigoBancoRecebedor: "005"
        prefixoAgenciaRecebedora: "109"
        dvPrefixoRecebedora: "3"
        especieBoleto: "02"
        dataCredito: "210923"
        valorTarifa: "50,85"
        outrasDespesas: "10,25"
        jurosDesconto: "01"
        iofDesconto: "01"
        valorAbatimento: "10,25"
        descontoConcedido: "02"
        valorRecebido: "10,25"
        jurosMora: "05"
        outrosRecebimentos: "05"
        abatimentoNaoAproveitado: "05"
        valorLancamento: "15"
        indicativoDebCred: "3"
        indicadorValor: "3"
        valorAjuste: "1"
        indicativoLiqParcial: "3"
        canalPagamento: "04"
        },
      {
        prefixoAgencia: "003"
        dvAgencia: "5"
        conta: "2569875"
        dvConta: "6"
        convenio: "2222"
        numeroControle: "235"
        nossoNumero: "25698"
        tipoCobranca: "1"
        tipoCobrancaEspecifico: "1"
        dias: "16"
        naturezaRecebimento: "00"
        prefixoBoleto: "002"
        varicaoCarteira: "111"
        contaCaucao: "1"
        taxaDesconto: "15"
        taxaIOF: "15"
        carteira: "02"
        comando: "02"
        dataLiquidacao: "210921"
        numeroBoleto: "0001155"
        dataVencimento: "210921"
        valorBoleto: "50,80"
        codigoBancoRecebedor: "002"
        prefixoAgenciaRecebedora: "104"
        dvPrefixoRecebedora: "2"
        especieBoleto: "01"
        dataCredito: "210921"
        valorTarifa: "50,80"
        outrasDespesas: "10,20"
        jurosDesconto: "00"
        iofDesconto: "00"
        valorAbatimento: "10,20"
        descontoConcedido: "00"
        valorRecebido: "10,20"
        jurosMora: "00"
        outrosRecebimentos: "00"
        abatimentoNaoAproveitado: "00"
        valorLancamento: "10"
        indicativoDebCred: "2"
        indicadorValor: "2"
        valorAjuste: "0"
        indicativoLiqParcial: "2"
        canalPagamento: "03"
      }],
      trailerRetornoInput: {
        quantBoletos01: "300"
        valorTotal01: "200,30"
        numAviso01: "200"
      },
      bancoInput: {
        bankCode: "001"
        cnabCode: 400
      }
    }
  )
}
```

## Sobre

- Author - [Alexandre Paixão]

## Licença

GNU GPL
