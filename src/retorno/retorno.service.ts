import { Injectable } from '@nestjs/common';
import { FileLayoutInput } from './dto/FileLayout.input';
import { generateRetornoCnab } from './saida_retorno/retorno';

@Injectable()
export class RetornoService {
    async generateCnab400(fileLayoutInput : FileLayoutInput): Promise <String>{
        const fileLayout = {
            headerArquivo: {
              identificacaoRegistro: fileLayoutInput.headerRetornoInput.identificacaoRegistro,
              tipoOperacao: fileLayoutInput.headerRetornoInput.tipoOperacao,
              identificacaoOperacao: fileLayoutInput.headerRetornoInput.identificacaoOperacao,
              tipoServico: fileLayoutInput.headerRetornoInput.tipoServico,
              extensoTipoServico: fileLayoutInput.headerRetornoInput.extensoTipoServico,
              complementoResgistro: fileLayoutInput.headerRetornoInput.complementoRegistro,
              numeroAgencia: fileLayoutInput.headerRetornoInput.numeroAgencia,
              dvAgencia: fileLayoutInput.headerRetornoInput.dvAgencia,
              conta: fileLayoutInput.headerRetornoInput.conta,
              dvCedente: fileLayoutInput.headerRetornoInput.dvCedente,
              zeros01: fileLayoutInput.headerRetornoInput.zeros01,
              nomeCedente: fileLayoutInput.headerRetornoInput.nomeCedente,
              banco01: fileLayoutInput.headerRetornoInput.banco01,
              dataGravacao: fileLayoutInput.headerRetornoInput.dataGravacao,
              sequencialRetorno: fileLayoutInput.headerRetornoInput.sequencialRetorno,
              complementoRegistro : fileLayoutInput.headerRetornoInput.complementoRegistro,
              numeroConvenio: fileLayoutInput.headerRetornoInput.numeroConvenio,
              complementoRegistro2: fileLayoutInput.headerRetornoInput.complementoRegistro2,
              sequencialRegistro: fileLayoutInput.headerRetornoInput.sequencialRegistro
            },
            detalhe: {
              identificacaoRegistro: fileLayoutInput.detalheRetornoInput.identificacaoRegistro,
              zeros01: fileLayoutInput.detalheRetornoInput.zeros01,
              zeros02: fileLayoutInput.detalheRetornoInput.zeros02,
              prefixoAgencia: fileLayoutInput.detalheRetornoInput.prefixoAgencia,
              dvAgencia: fileLayoutInput.detalheRetornoInput.dvAgencia,
              conta: fileLayoutInput.detalheRetornoInput.conta,
              dvConta: fileLayoutInput.detalheRetornoInput.dvConta,
              convenio: fileLayoutInput.detalheRetornoInput.convenio,
              numeroControle: fileLayoutInput.detalheRetornoInput.numeroControle,
              nossoNumero: fileLayoutInput.detalheRetornoInput.nossoNumero,
              tipoCobranca: fileLayoutInput.detalheRetornoInput.tipoCobranca,
              tipoCobrancaEspecifico: fileLayoutInput.detalheRetornoInput.tipoCobrancaEspecifico,
              dias: fileLayoutInput.detalheRetornoInput.dias,
              naturezaRecebimento: fileLayoutInput.detalheRetornoInput.naturezaRecebimento,
              prefixoBoleto: fileLayoutInput.detalheRetornoInput.prefixoBoleto,
              varicaoCarteira: fileLayoutInput.detalheRetornoInput.varicaoCarteira,
              contaCaucao: fileLayoutInput.detalheRetornoInput.contaCaucao,
              taxaDesconto: fileLayoutInput.detalheRetornoInput.taxaDesconto,
              taxaIOF: fileLayoutInput.detalheRetornoInput.taxaIOF,
              branco01: fileLayoutInput.detalheRetornoInput.branco01,
              carteira: fileLayoutInput.detalheRetornoInput.carteira,
              comando: fileLayoutInput.detalheRetornoInput.comando,
              dataLiquidacao: fileLayoutInput.detalheRetornoInput.dataLiquidacao,
              numeroBoleto: fileLayoutInput.detalheRetornoInput.numeroBoleto,
              brancos01: fileLayoutInput.detalheRetornoInput.brancos01,
              dataVencimento: fileLayoutInput.detalheRetornoInput.dataVencimento,
              valorBoleto: fileLayoutInput.detalheRetornoInput.valorBoleto,
              codigoBancoRecebedor: fileLayoutInput.detalheRetornoInput.codigoBancoRecebedor,
              prefixoAgenciaRecebedora: fileLayoutInput.detalheRetornoInput.prefixoAgenciaRecebedora,
              dvPrefixoRecebedora: fileLayoutInput.detalheRetornoInput.dvPrefixoRecebedora,
              especieBoleto: fileLayoutInput.detalheRetornoInput.especieBoleto,
              dataCredito: fileLayoutInput.detalheRetornoInput.dataCredito,
              valorTarifa: fileLayoutInput.detalheRetornoInput.valorTarifa,
              outrasDespesas: fileLayoutInput.detalheRetornoInput.outrasDespesas,
              jurosDesconto: fileLayoutInput.detalheRetornoInput.jurosDesconto,
              iofDesconto: fileLayoutInput.detalheRetornoInput.iofDesconto,
              valorAbatimento: fileLayoutInput.detalheRetornoInput.valorAbatimento,
              descontoConcedido: fileLayoutInput.detalheRetornoInput.descontoConcedido,
              valorRecebido: fileLayoutInput.detalheRetornoInput.valorRecebido,
              jurosMora: fileLayoutInput.detalheRetornoInput.jurosMora,
              outrosRecebimentos: fileLayoutInput.detalheRetornoInput.outrosRecebimentos,
              abatimentoNaoAproveitado: fileLayoutInput.detalheRetornoInput.abatimentoNaoAproveitado,
              valorLancamento: fileLayoutInput.detalheRetornoInput.valorLancamento,
              indicativoDebCred: fileLayoutInput.detalheRetornoInput.indicativoDebCred,
              indicadorValor: fileLayoutInput.detalheRetornoInput.indicadorValor,
              valorAjuste: fileLayoutInput.detalheRetornoInput.valorAjuste,
              Brancos02: fileLayoutInput.detalheRetornoInput.Brancos02,
              Brancos03: fileLayoutInput.detalheRetornoInput.Brancos03,
              zeros03: fileLayoutInput.detalheRetornoInput.zeros03,
              zeros04: fileLayoutInput.detalheRetornoInput.zeros04,
              zeros05: fileLayoutInput.detalheRetornoInput.zeros05,
              zeros06: fileLayoutInput.detalheRetornoInput.zeros06,
              zeros07: fileLayoutInput.detalheRetornoInput.zeros07,
              zeros08: fileLayoutInput.detalheRetornoInput.zeros08,
              zeros09: fileLayoutInput.detalheRetornoInput.zeros09,
              indicativoLiqParcial: fileLayoutInput.detalheRetornoInput.indicativoLiqParcial,
              branco02: fileLayoutInput.detalheRetornoInput.branco02,
              canalPagamento: fileLayoutInput.detalheRetornoInput.canalPagamento,
              sequencialRegistro: fileLayoutInput.detalheRetornoInput.sequencialRegistro
            },
            trailerArquivo: { 
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
                quantBoletos02: fileLayoutInput.trailerRetornoInput.quantBoletos02,
                valorTotal02: fileLayoutInput.trailerRetornoInput.valorTotal02,
                numAviso02: fileLayoutInput.trailerRetornoInput.numAviso02,
                brancos03: fileLayoutInput.trailerRetornoInput.brancos03,
                // COBRANÇA CAUCIONADA
                quantBoletos03: fileLayoutInput.trailerRetornoInput.quantBoletos03,
                valorTotal03: fileLayoutInput.trailerRetornoInput.valorTotal03,
                numAviso03: fileLayoutInput.trailerRetornoInput.numAviso03,
                brancos04: fileLayoutInput.trailerRetornoInput.brancos04,
                // COBRANÇA DESCONTADA
                quantBoletos04: fileLayoutInput.trailerRetornoInput.quantBoletos04,
                valorTotal04: fileLayoutInput.trailerRetornoInput.valorTotal04,
                numAviso04: fileLayoutInput.trailerRetornoInput.numAviso04,
                brancos05: fileLayoutInput.trailerRetornoInput.brancos05,
                // COBRANÇA VENDOR
                quantBoletos05: fileLayoutInput.trailerRetornoInput.quantBoletos05,
                valorTotal05: fileLayoutInput.trailerRetornoInput.valorTotal05,
                numAviso05: fileLayoutInput.trailerRetornoInput.numAviso05,
                brancos06: fileLayoutInput.trailerRetornoInput.brancos06,
                sequencialRegistro: fileLayoutInput.trailerRetornoInput.sequencialRegistro
            }
          };
          const bankCode = fileLayoutInput.bancoInput.bankCode;
          const cnabCode = fileLayoutInput.bancoInput.cnabCode;
          const finalresult = generateRetornoCnab(fileLayout, cnabCode, bankCode);
          // finalResult tem uma string com o conteúdo do arquivo remessa, que pode ser salvo num arquivo.rem por exemplo
          // fs.writeFileSync('./cobranca.rem', finalresult, 'UTF8');
          console.log(fileLayout);
          console.log(cnabCode);
          console.log(bankCode);
          console.log(finalresult);

          return finalresult;
    }
}
