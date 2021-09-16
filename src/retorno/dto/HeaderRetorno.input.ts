import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class HeaderRetornoInput{

    // "0"
    @Field(() => String)
    identificacaoRegistro: string;

    // "2"
    @Field(() => String)
    tipoOperacao: string;

    // "Retorno"
    @Field(() => String)
    identificacaoOperacao: string;

    // "01"
    @Field(() => String)
    tipoServico: string;

    // "COBRANCA"
    @Field(() => String)
    extensoTipoServico: string;

    // "Brancos"
    @Field(() => String)
    complementoResgistro: string;

    @Field(() => String)
    numeroAgencia: string;

    @Field(() => String)
    dvAgencia: string;

    @Field(() => String)
    conta: string;

    @Field(() => String)
    dvCedente: string;

    @Field(() => String)
    zeros01: string;

    @Field(() => String)
    nomeCedente: string;

    @Field(() => String)
    banco01: string = "001BANCODOBRASIL";

    // "DDMMAA"
    @Field(() => String)
    dataGravacao: string;

    @Field(() => String)
    sequencialRetorno: string;

    @Field(() => String)
    complementoRegistro: string;

    @Field(() => String)
    numeroConvenio: string;

    @Field(() => String)
    complementoRegistro2: string;

    @Field(() => String)
    sequencialRegistro: string;
}