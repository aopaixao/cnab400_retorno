import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class DetalheArquivoVendor{
    // 3
    @Field(() => String)
    identificacaoRegistroDetalhe: string;

    @Field(() => String)
    nossoNumero: string;

    @Field(() => String)
    dvNossoNumero: string;

    @Field(() => String)
    numOperacaoVendor: string;

    // DDMMAAAA
    @Field(() => String)
    dataOperacaoVendor: string;

    // ver nota explicativa
    @Field(() => String)
    taxaJurosVendor: string;

    @Field(() => String)
    taxaJurosComprador: string;

    @Field(() => String)
    vencimentoBoleto: string;

    @Field(() => String)
    valorOrigVenda: string;

    @Field(() => String)
    valorEncargos: string;

    @Field(() => String)
    valorIOFFinan: string;

    @Field(() => String)
    valAcumAbatimento: string;

    // ver nota explicativa
    @Field(() => String)
    indicEpocaEqualiz: string;

    // ver nota explicativa
    @Field(() => String)
    indicNaturezaEqualiz: string;

    @Field(() => String)
    valorEqualiz: string;

    @Field(() => String)
    valJurosProrrog: string;

    @Field(() => String)
    valIOFProrrog: string;

    @Field(() => String)
    valIOFPeriodoAtraso: string;

    @Field(() => String)
    nomeComprador: string;

    // ver nota explicativa
    @Field(() => String)
    codDocComprador: string;

    @Field(() => String)
    numDocComprador: string;

    // ver nota explicativa
    @Field(() => String)
    conversaoCnab240: string;

    @Field(() => String)
    nossoNumeroPosicao17: string;

    @Field(() => String)
    novoValBoleto: string;

    @Field(() => String)
    valEqualizEstornada: string;

    @Field(() => String)
    valNovaEqualiz: string;

    @Field(() => String)
    valDiferencaEqualiz: string;

    // ver nota explicativa
    @Field(() => String)
    indicativoDebCred: string;

    // ver nota explicativa
    @Field(() => String)
    indicNaturezaEqualiz02: string;

    // ver nota explicativa
    @Field(() => String)
    indicNaturezaEqualiz03: string;

    @Field(() => String)
    valIOFNFinanciado: string;

    @Field(() => String)
    valComiPermanencia: string;

    @Field(() => String)
    Brancos: string;
}