import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@InputType()
// Opcional para 15 posições
export class DetalheOpcionalBoletoInput{
    // "5 ver nota explicativa"
    @IsOptional()
    @Field(() => String)
    identificacaoRegistroTransacao?: string;

    // "06"
    @IsOptional()
    @Field(() => String)
    tiposServico?: string;

    @IsOptional()
    @Field(() => String)
    zeros01?: string;

    @IsOptional()
    @Field(() => String)
    numeroBoleto?: string;

    // "Brancos"
    @IsOptional()
    @Field(() => String)
    complementoRegistro?: string;

    @IsOptional()
    @Field(() => String)
    numSequenRegArquivo?: string;


}