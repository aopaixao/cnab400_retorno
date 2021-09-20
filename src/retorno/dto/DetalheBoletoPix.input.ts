import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@InputType()
export class DetalheBoletoPixInput{
    // "5"
    @IsOptional()
    @Field(() => String)
    identificacaoRegistroTransacao?: string;

    // "10"
    @IsOptional()
    @Field(() => String)
    tipoServico?: string;

    @IsOptional()
    @Field(() => String)
    zeros?: string;

    @IsOptional()
    @Field(() => String)
    brancos01?: string;

    @IsOptional()
    @Field(() => String)
    url?: string;

    @IsOptional()
    @Field(() => String)
    txid?: string;

    @IsOptional()
    @Field(() => String)
    brancos02?: string;

    @IsOptional()
    @Field(() => String)
    sequencialRegistro?: string;
}