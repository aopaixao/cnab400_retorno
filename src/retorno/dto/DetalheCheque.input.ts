import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@InputType()
export class DetalheChequeInput{
    // "5"
    @IsOptional()
    @Field(() => String)
    identificacaoRegistroTransacao?: string;

    // "04"
    @IsOptional()
    @Field(() => String)
    tipoServico?: string;

    @IsOptional()
    @Field(() => String)
    zeros01?: string;

    @IsOptional()
    @Field(() => String)
    nossoNumero?: string;

    // "DDMMAAAA"
    @IsOptional()
    @Field(() => String)
    dataPagamento?: string;

    @IsOptional()
    @Field(() => String)
    zeros02?: string;

    @IsOptional()
    @Field(() => String)
    valorCheque?: string;

    @IsOptional()
    @Field(() => String)
    prazoBloqCheque?: string;

    @IsOptional()
    @Field(() => String)
    zeros03?: string;

    @IsOptional()
    @Field(() => String)
    motivoDevolucao?: string;

    @IsOptional()
    @Field(() => String)
    brancos01?: string;

    @IsOptional()
    @Field(() => String)
    trilhaCheque?: string;

    // "Ver nota explicativa"
    @IsOptional()
    @Field(() => String)
    tipoCaptura?: string;

    @IsOptional()
    @Field(() => String)
    zeros04?: string;

    @IsOptional()
    @Field(() => String)
    brancos02?: string;

    @IsOptional()
    @Field(() => String)
    sequencialRegistro?: string;
}