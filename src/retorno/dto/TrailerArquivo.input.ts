import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class TrailerArquivoInput{
    // "9"
    @Field(() => String)
    identificacaoRegistroTrailer: string;

    @Field(() => String)
    valFixo01: string = "2";

    @Field(() => String)
    valFixo02: string = "01";

    @Field(() => String)
    valFixo03: string = "001";

    @Field(() => String)
    brancos01: string;

    // COBRANÇA SIMPLES

    @Field(() => String)
    quantBoletos01: string;

    @Field(() => String)
    valorTotal01: string;

    @Field(() => String)
    numAviso01: string;

    @Field(() => String)
    brancos02: string;

    // COBRANÇA VINCULADA

    @Field(() => String)
    quantBoletos02: string;

    @Field(() => String)
    valorTotal02: string;

    @Field(() => String)
    numAviso02: string;

    @Field(() => String)
    brancos03: string;

    // COBRANÇA CAUCIONADA

    @Field(() => String)
    quantBoletos03: string;

    @Field(() => String)
    valorTotal03: string;

    @Field(() => String)
    numAviso03: string;

    @Field(() => String)
    brancos04: string;

    // COBRANÇA DESCONTADA

    @Field(() => String)
    quantBoletos04: string;

    @Field(() => String)
    valorTotal04: string;

    @Field(() => String)
    numAviso04: string;

    @Field(() => String)
    brancos05: string;

    // COBRANÇA VENDOR

    @Field(() => String)
    quantBoletos05: string;

    @Field(() => String)
    valorTotal05: string;

    @Field(() => String)
    numAviso05: string;

    @Field(() => String)
    brancos06: string;

    @Field(() => String)
    sequencialRegistro: string;
}