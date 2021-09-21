import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@InputType()
export class DetalheRetornoInput{

    // 7
    @IsOptional()
    @Field(() => String)
    identificacaoRegistro?: string = '7';

    @IsOptional()
    @Field(() => String)
    zeros01?: string = '0';

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

    @IsOptional()
    @Field(() => String)
    branco01?: string = '';

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

    @IsOptional()
    @Field(() => String)
    brancos01?: string = '';

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
    @IsOptional()
    @Field(() => String)
    Brancos02?: string = '';

    // "Ver nota explicativa"
    @IsOptional()
    @Field(() => String)
    zeros03?: string = '0';

    // "Ver nota explicativa"
    @Field(() => String)
    indicativoLiqParcial: string;

    @IsOptional()
    @Field(() => String)
    branco02?: string = '';

    // "Ver nota explicativa"
    @Field(() => String)
    canalPagamento: string;

    // @IsOptional()
    // @Field(() => String)
    // sequencialRegistro?: string;
}