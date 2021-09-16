import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class DetalheChequeInput{
    // "5"
    @Field(() => String)
    identificacaoRegistroTransacao: string;

    // "04"
    @Field(() => String)
    tipoServico: string;

    @Field(() => String)
    zeros01: string;

    @Field(() => String)
    nossoNumero: string;

    // "DDMMAAAA"
    @Field(() => String)
    dataPagamento: string;

    @Field(() => String)
    zeros02: string;

    @Field(() => String)
    valorCheque: string;

    @Field(() => String)
    prazoBloqCheque: string;

    @Field(() => String)
    zeros03: string;

    @Field(() => String)
    motivoDevolucao: string;

    @Field(() => String)
    brancos01: string;

    @Field(() => String)
    trilhaCheque: string;

    // "Ver nota explicativa"
    @Field(() => String)
    tipoCaptura: string;

    @Field(() => String)
    zeros04: string;

    @Field(() => String)
    brancos02: string;

    @Field(() => String)
    sequencialRegistro: string;
}