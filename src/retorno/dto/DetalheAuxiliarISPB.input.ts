import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class DetalheAuxiliarISPB{

    // 5
    @Field(() => String)
    identificacaoRegistroDetalhe: string;

    // 04
    @Field(() => String)
    tipoServico: string;

    @Field(() => String)
    nossoNumero: string;

    // 3x
    @Field(() => String)
    bancoCred: string;

    // 3x
    @Field(() => String)
    camaraCompensacao: string;

    // 3x "Ver nota explicativa"
    @Field(() => String)
    codigoISPB: string;

    // 3x
    @Field(() => String)
    prefixAgenCred: string;

    // 3x
    @Field(() => String)
    dvAgenCred: string;

    // 3x
    @Field(() => String)
    contaCred: string;

    // 3x
    @Field(() => String)
    dvContaCred: string;

    // 3x
    @Field(() => String)
    nomeFavorecido: string;

    // 3x
    @Field(() => String)
    valorPartilha: string;

    // 3x
    @Field(() => String)
    brancos01: string;

    // ver nota explicativa
    @Field(() => String)
    tipoDocFavorecido01: string;

    @Field(() => String)
    numDocFavorecido01: string;

    // ver nota explicativa
    @Field(() => String)
    tipoDocFavorecido02: string;

    @Field(() => String)
    numDocFavorecido02: string;

    // ver nota explicativa
    @Field(() => String)
    tipoDocFavorecido03: string;

    @Field(() => String)
    numDocFavorecido03: string;

    @Field(() => String)
    brancos: string;

    @Field(() => String)
    sequencial: string;
}