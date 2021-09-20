import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@InputType()
export class DetalheBloquetoInput{
    // "5"
    @IsOptional()
    @Field(() => String)
    identificacaoRegistroTransacao?: string;

    // "01"
    @IsOptional()
    @Field(() => String)
    tipoServico?: string;

    @IsOptional()
    @Field(() => String)
    zeros?: string;

    @IsOptional()
    @Field(() => String)
    emailRemessa?: string;

    @IsOptional()
    @Field(() => String)
    brancos?: string;

    @IsOptional()
    @Field(() => String)
    sequencialRegistro?: string;
}