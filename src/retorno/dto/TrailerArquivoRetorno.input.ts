import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@InputType()
export class TrailerArquivoInput{
    // "9"
    @IsOptional()
    @Field(() => String)
    identificacaoRegistroTrailer?: string = '9';

    @IsOptional()
    @Field(() => String)
    valFixo01?: string = '2';

    @IsOptional()
    @Field(() => String)
    valFixo02?: string = '01';

    @IsOptional()
    @Field(() => String)
    valFixo03?: string = '001';

    @IsOptional()
    @Field(() => String)
    brancos01?: string = '';

    // COBRANÇA SIMPLES

    @Field(() => String)
    quantBoletos01: string;

    @Field(() => String)
    valorTotal01: string;

    @Field(() => String)
    numAviso01: string;

    @IsOptional()
    @Field(() => String)
    brancos02?: string = '';

    // COBRANÇA VINCULADA

    // @IsOptional()
    // @Field(() => String)
    // quantBoletos02?: string;

    // @IsOptional()
    // @Field(() => String)
    // valorTotal02?: string;

    // @IsOptional()
    // @Field(() => String)
    // numAviso02?: string;

    // @IsOptional()
    // @Field(() => String)
    // brancos03?: string;

    // COBRANÇA CAUCIONADA

    // @IsOptional()
    // @Field(() => String)
    // quantBoletos03?: string;

    // @IsOptional()
    // @Field(() => String)
    // valorTotal03?: string;

    // @IsOptional()
    // @Field(() => String)
    // numAviso03?: string;

    // @IsOptional()
    // @Field(() => String)
    // brancos04?: string;

    // COBRANÇA DESCONTADA

    // @IsOptional()
    // @Field(() => String)
    // quantBoletos04?: string;

    // @IsOptional()
    // @Field(() => String)
    // valorTotal04?: string;

    // @IsOptional()
    // @Field(() => String)
    // numAviso04?: string;

    // @IsOptional()
    // @Field(() => String)
    // brancos05?: string;

    // COBRANÇA VENDOR

    // @IsOptional()
    // @Field(() => String)
    // quantBoletos05?: string;

    // @IsOptional()
    // @Field(() => String)
    // valorTotal05?: string;

    // @IsOptional()
    // @Field(() => String)
    // numAviso05?: string;

    // @IsOptional()
    // @Field(() => String)
    // brancos06?: string;

    // @IsOptional()
    // @Field(() => String)
    // sequencialRegistro?: string;
}