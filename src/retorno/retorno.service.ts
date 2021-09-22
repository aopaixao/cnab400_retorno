import { Injectable } from '@nestjs/common';
import { FileLayoutInput } from './dto/FileLayout.input';
import { DetalheRetornoInput } from './dto/DetalheRetorno.input';
import { generateRetornoCnab } from './saida_retorno/retorno';

@Injectable()
export class RetornoService {
    async generateCnab400(fileLayoutInput : FileLayoutInput): Promise <String>{

      const returnFileLayout: any = [];

      //Popula o header
      const headerArquivo: any = {
        identificacaoRegistro: fileLayoutInput.headerRetornoInput.identificacaoRegistro,
        tipoOperacao: fileLayoutInput.headerRetornoInput.tipoOperacao,
        identificacaoOperacao: fileLayoutInput.headerRetornoInput.identificacaoOperacao,
        tipoServico: fileLayoutInput.headerRetornoInput.tipoServico,
        extensoTipoServico: fileLayoutInput.headerRetornoInput.extensoTipoServico,
        complementoResgistro: fileLayoutInput.headerRetornoInput.complementoRegistro01,
        numeroAgencia: fileLayoutInput.headerRetornoInput.numeroAgencia,
        dvAgencia: fileLayoutInput.headerRetornoInput.dvAgencia,
        conta: fileLayoutInput.headerRetornoInput.conta,
        dvCedente: fileLayoutInput.headerRetornoInput.dvCedente,
        zeros01: fileLayoutInput.headerRetornoInput.zeros01,
        nomeCedente: fileLayoutInput.headerRetornoInput.nomeCedente,
        banco01: fileLayoutInput.headerRetornoInput.banco01,
        dataGravacao: fileLayoutInput.headerRetornoInput.dataGravacao,
        sequencialRetorno: fileLayoutInput.headerRetornoInput.sequencialRetorno,
        complementoRegistro : fileLayoutInput.headerRetornoInput.complementoRegistro02,
        numeroConvenio: fileLayoutInput.headerRetornoInput.numeroConvenio,
        complementoRegistro2: fileLayoutInput.headerRetornoInput.complementoRegistro03,
      };

      returnFileLayout.push({ headerArquivo });
      
      //Popula o array de detalhes
      const keyName='detalhe';
      const detalheKeyValue: any = [];
      const detalheValues: any = [];

      fileLayoutInput.detalheRetornoInput.forEach((detalhe_retorno: DetalheRetornoInput) => {
        detalheValues.push({
          zeros01: detalhe_retorno.zeros01,
          prefixoAgencia: detalhe_retorno.prefixoAgencia,
          dvAgencia: detalhe_retorno.dvAgencia,
          conta: detalhe_retorno.conta,
          dvConta: detalhe_retorno.dvConta,
          convenio: detalhe_retorno.convenio,
          numeroControle: detalhe_retorno.numeroControle,
          nossoNumero: detalhe_retorno.nossoNumero,
          tipoCobranca: detalhe_retorno.tipoCobranca,
          tipoCobrancaEspecifico: detalhe_retorno.tipoCobrancaEspecifico,
          dias: detalhe_retorno.dias,
          naturezaRecebimento: detalhe_retorno.naturezaRecebimento,
          prefixoBoleto: detalhe_retorno.prefixoBoleto,
          varicaoCarteira: detalhe_retorno.varicaoCarteira,
          contaCaucao: detalhe_retorno.contaCaucao,
          taxaDesconto: detalhe_retorno.taxaDesconto,
          taxaIOF: detalhe_retorno.taxaIOF,
          branco01: detalhe_retorno.branco01,
          carteira: detalhe_retorno.carteira,
          comando: detalhe_retorno.comando,
          dataLiquidacao: detalhe_retorno.dataLiquidacao,
          numeroBoleto: detalhe_retorno.numeroBoleto,
          brancos01: detalhe_retorno.brancos01,
          dataVencimento: detalhe_retorno.dataVencimento,
          valorBoleto: detalhe_retorno.valorBoleto,
          codigoBancoRecebedor: detalhe_retorno.codigoBancoRecebedor,
          prefixoAgenciaRecebedora: detalhe_retorno.prefixoAgenciaRecebedora,
          dvPrefixoRecebedora: detalhe_retorno.dvPrefixoRecebedora,
          especieBoleto: detalhe_retorno.especieBoleto,
          dataCredito: detalhe_retorno.dataCredito,
          valorTarifa: detalhe_retorno.valorTarifa,
          outrasDespesas: detalhe_retorno.outrasDespesas,
          jurosDesconto: detalhe_retorno.jurosDesconto,
          iofDesconto: detalhe_retorno.iofDesconto,
          valorAbatimento: detalhe_retorno.valorAbatimento,
          descontoConcedido: detalhe_retorno.descontoConcedido,
          valorRecebido: detalhe_retorno.valorRecebido,
          jurosMora: detalhe_retorno.jurosMora,
          outrosRecebimentos: detalhe_retorno.outrosRecebimentos,
          abatimentoNaoAproveitado: detalhe_retorno.abatimentoNaoAproveitado,
          valorLancamento: detalhe_retorno.valorLancamento,
          indicativoDebCred: detalhe_retorno.indicativoDebCred,
          indicadorValor: detalhe_retorno.indicadorValor,
          valorAjuste: detalhe_retorno.valorAjuste,
          Brancos02: detalhe_retorno.Brancos02,
          zeros03: detalhe_retorno.zeros03,
          indicativoLiqParcial: detalhe_retorno.indicativoLiqParcial,
          branco02: detalhe_retorno.branco02,
          canalPagamento: detalhe_retorno.canalPagamento
        });
       
      })
      detalheKeyValue[keyName] = detalheValues; 
      const detalhe = detalheKeyValue[keyName];
      returnFileLayout.push( {detalhe} );

      //Popula o trailer
      const trailerArquivo: any = { 
        identificacaoRegistroTrailer: fileLayoutInput.trailerRetornoInput.identificacaoRegistroTrailer, 
        valFixo01: fileLayoutInput.trailerRetornoInput.valFixo01, 
        valFixo02: fileLayoutInput.trailerRetornoInput.valFixo02,
        valFixo03: fileLayoutInput.trailerRetornoInput.valFixo03,
        brancos01: fileLayoutInput.trailerRetornoInput.brancos01,
        // COBRANÇA SIMPLES
        quantBoletos01: fileLayoutInput.trailerRetornoInput.quantBoletos01,
        valorTotal01: fileLayoutInput.trailerRetornoInput.valorTotal01,
        numAviso01: fileLayoutInput.trailerRetornoInput.numAviso01,
        brancos02: fileLayoutInput.trailerRetornoInput.brancos02,
        // COBRANÇA VINCULADA
        // quantBoletos02: fileLayoutInput.trailerRetornoInput.quantBoletos02,
        // valorTotal02: fileLayoutInput.trailerRetornoInput.valorTotal02,
        // numAviso02: fileLayoutInput.trailerRetornoInput.numAviso02,
        // brancos03: fileLayoutInput.trailerRetornoInput.brancos03,
        // COBRANÇA CAUCIONADA
        // quantBoletos03: fileLayoutInput.trailerRetornoInput.quantBoletos03,
        // valorTotal03: fileLayoutInput.trailerRetornoInput.valorTotal03,
        // numAviso03: fileLayoutInput.trailerRetornoInput.numAviso03,
        // brancos04: fileLayoutInput.trailerRetornoInput.brancos04,
        // COBRANÇA DESCONTADA
        // quantBoletos04: fileLayoutInput.trailerRetornoInput.quantBoletos04,
        // valorTotal04: fileLayoutInput.trailerRetornoInput.valorTotal04,
        // numAviso04: fileLayoutInput.trailerRetornoInput.numAviso04,
        // brancos05: fileLayoutInput.trailerRetornoInput.brancos05,
        // COBRANÇA VENDOR
        // quantBoletos05: fileLayoutInput.trailerRetornoInput.quantBoletos05,
        // valorTotal05: fileLayoutInput.trailerRetornoInput.valorTotal05,
        // numAviso05: fileLayoutInput.trailerRetornoInput.numAviso05,
        // brancos06: fileLayoutInput.trailerRetornoInput.brancos06,
        // sequencialRegistro: fileLayoutInput.trailerRetornoInput.sequencialRegistro
    }

    returnFileLayout.push({ trailerArquivo });

    //console.log(JSON.stringify(returnFileLayout));
    return JSON.stringify(returnFileLayout);
    
    /**
    const bankCode = fileLayoutInput.bancoInput.bankCode;
    const cnabCode = fileLayoutInput.bancoInput.cnabCode;
    //const finalresult = generateRetornoCnab(fileLayout, cnabCode, bankCode);
    // finalResult tem uma string com o conteúdo do arquivo remessa, que pode ser salvo num arquivo.rem por exemplo
    // fs.writeFileSync('./cobranca.rem', finalresult, 'UTF8');
    
    console.log(fileLayout);
    console.log(cnabCode);
    console.log(bankCode);
    console.log(finalresult);

    return finalresult;
    /**/  
    }
}
