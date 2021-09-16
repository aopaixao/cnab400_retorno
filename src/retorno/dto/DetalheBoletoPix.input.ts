import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class DetalheBoletoPixInput{
    // "5"
    @Field(() => String)
    identificacaoRegistroTransacao: string;

    // "10"
    @Field(() => String)
    tipoServico: string;

    @Field(() => String)
    zeros: string;

    @Field(() => String)
    brancos01: string;

    @Field(() => String)
    url: string;

    @Field(() => String)
    txid: string;

    @Field(() => String)
    brancos02: string;

    @Field(() => String)
    sequencialRegistro: string;
}