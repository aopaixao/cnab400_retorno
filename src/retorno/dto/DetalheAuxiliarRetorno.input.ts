import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class DetalheAuxiliarInpitut{

    // 2
    @Field(() => String)
    identificacaoRegistro: string;

    @Field(() => String)
    nossoNumero: string;

    @Field(() => String)
    bancoCredito: string;

    // 4x
    @Field(() => String)
    camaraCompensacao: string;

    // 3x
    @Field(() => String)
    prefixoAgenCred: string;

    @Field(() => String)
    dvAgenCred: string;

    // 4x
    @Field(() => String)
    contaCredito: string;

    // 3x
    @Field(() => String)
    dvContaCred: string;

    // 4x
    @Field(() => String)
    nomeFavorecido: string;

    // 4x
    @Field(() => String)
    valorPartilha: string;

    // 4x
    @Field(() => String)
    valorPartilhado: string;

    // 3x
    @Field(() => String)
    bancoCred: string;

    @Field(() => String)
    prefixAgenCred: string;

    //3x
    @Field(() => String)
    dvPrefixAgenCred: string;

    // "Ver nota explicativa"
    @Field(() => String)
    tipoDocFavorecido01: string;

    @Field(() => String)
    numDocFavorecido01: string;

    // "Ver nota explicativa"
    @Field(() => String)
    tipoDocFavorecido02: string;

    @Field(() => String)
    numDocFavorecido02: string;

    // "Ver nota explicativa"
    @Field(() => String)
    tipoDocFavorecido03: string;

    @Field(() => String)
    numDocFavorecido03: string;

    // "Ver nota explicativa"
    @Field(() => String)
    tipoDocFavorecido04: string;

    @Field(() => String)
    numDocFavorecido04: string;

    @Field(() => String)
    sequencial: string;

}