import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class DetalheRetornoInput{

    // 7
    @Field(() => String)
    identificacaoRegistro: string;

    @Field(() => String)
    zeros01: string;

    @Field(() => String)
    zeros02: string;

    @Field(() => String)
    prefixoAgencia: string;

    @Field(() => String)
    dvAgencia: string;

    @Field(() => String)
    conta: string;

    @Field(() => String)
    dvConta: string;

    @Field(() => String)
    convenio: string;

    @Field(() => String)
    numeroControle: string;

    @Field(() => String)
    nossoNumero: string;

   // "Ver nota explicativa"
    @Field(() => String)
    tipoCobranca: string;

   // "Ver nota explicativa"
    @Field(() => String)
    tipoCobrancaEspecifico: string;

   // "Ver nota explicativa"
    @Field(() => String)
    dias: string;

    // "Ver nota explicativa"
    @Field(() => String)
    naturezaRecebimento: string;

    // "Ver nota explicativa"
    @Field(() => String)
    prefixoBoleto: string;


    @Field(() => String)
    varicaoCarteira: string;

     // "Ver nota explicativa"
    @Field(() => String)
    contaCaucao: string;

    @Field(() => String)
    taxaDesconto: string;

    @Field(() => String)
    taxaIOF: string;

    @Field(() => String)
    branco01: string;

    @Field(() => String)
    carteira: string;

     // "Ver nota explicativa"
    @Field(() => String)
    comando: string;

     // "DDMMAA"
    @Field(() => String)
    dataLiquidacao: string;

    @Field(() => String)
    numeroBoleto: string;

    @Field(() => String)
    brancos01: string;

     // "Ver nota explicativa"
    @Field(() => String)
    dataVencimento: string;

    @Field(() => String)
    valorBoleto: string;

     // "Ver nota explicativa"
    @Field(() => String)
    codigoBancoRecebedor: string;

     // "Ver nota explicativa"
    @Field(() => String)
    prefixoAgenciaRecebedora: string;

    @Field(() => String)
    dvPrefixoRecebedora: string;

     // "Ver nota explicativa"
    @Field(() => String)
    especieBoleto: string;

     // "Ver nota explicativa DDMMAA"
    @Field(() => String)
    dataCredito: string;

     // "Ver nota explicativa"
    @Field(() => String)
    valorTarifa: string;

    @Field(() => String)
    outrasDespesas: string;

    @Field(() => String)
    jurosDesconto: string;

    @Field(() => String)
    iofDesconto: string;

    @Field(() => String)
    valorAbatimento: string;

    @Field(() => String)
    descontoConcedido: string;

    @Field(() => String)
    valorRecebido: string;

    @Field(() => String)
    jurosMora: string;

    // "Ver nota explicativa"
    @Field(() => String)
    outrosRecebimentos: string;

    @Field(() => String)
    abatimentoNaoAproveitado: string;

    @Field(() => String)
    valorLancamento: string;

    // "Ver nota explicativa"
    @Field(() => String)
    indicativoDebCred: string;

    // "Ver nota explicativa"
    @Field(() => String)
    indicadorValor: string;

    // "Ver nota explicativa"
    @Field(() => String)
    valorAjuste: string;

    // "Ver nota explicativa"
    @Field(() => String)
    Brancos02: string;

    // "Ver nota explicativa"
    @Field(() => String)
    Brancos03: string;

    // "Ver nota explicativa"
    @Field(() => String)
    zeros03: string;

    // "Ver nota explicativa"
    @Field(() => String)
    zeros04: string;

    // "Ver nota explicativa"
    @Field(() => String)
    zeros05: string;

    // "Ver nota explicativa"
    @Field(() => String)
    zeros06: string;

    // "Ver nota explicativa"
    @Field(() => String)
    zeros07: string;

    // "Ver nota explicativa"
    @Field(() => String)
    zeros08: string;

    // "Ver nota explicativa"
    @Field(() => String)
    zeros09: string;

    // "Ver nota explicativa"
    @Field(() => String)
    indicativoLiqParcial: string;

    @Field(() => String)
    branco02: string;

    // "Ver nota explicativa"
    @Field(() => String)
    canalPagamento: string;

    @Field(() => String)
    sequencialRegistro: string;
}