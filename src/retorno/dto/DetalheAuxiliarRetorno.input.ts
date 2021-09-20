import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@InputType()
export class DetalheAuxiliarRetornoInput{

    // 2
    @IsOptional()
    @Field(() => String)
    identificacaoRegistro?: string;

    @IsOptional()
    @Field(() => String)
    nossoNumero?: string;

    @IsOptional()
    @Field(() => String)
    bancoCredito?: string;

    // 4x
    @IsOptional()
    @Field(() => String)
    camaraCompensacao?: string;

    // 3x
    @IsOptional()
    @Field(() => String)
    prefixoAgenCred?: string;

    @IsOptional()
    @Field(() => String)
    dvAgenCred?: string;

    // 4x
    @IsOptional()
    @Field(() => String)
    contaCredito?: string;

    // 3x
    @IsOptional()
    @Field(() => String)
    dvContaCred?: string;

    // 4x
    @IsOptional()
    @Field(() => String)
    nomeFavorecido?: string;

    // 4x
    @IsOptional()
    @Field(() => String)
    valorPartilha?: string;

    // 4x
    @IsOptional()
    @Field(() => String)
    valorPartilhado?: string;

    // 3x
    @IsOptional()
    @Field(() => String)
    bancoCred?: string;

    @IsOptional()
    @Field(() => String)
    prefixAgenCred?: string;

    //3x
    @IsOptional()
    @Field(() => String)
    dvPrefixAgenCred?: string;

    // "Ver nota explicativa"
    @IsOptional()
    @Field(() => String)
    tipoDocFavorecido01?: string;

    @IsOptional()
    @Field(() => String)
    numDocFavorecido01?: string;

    // "Ver nota explicativa"
    @IsOptional()
    @Field(() => String)
    tipoDocFavorecido02?: string;

    @IsOptional()
    @Field(() => String)
    numDocFavorecido02?: string;

    // "Ver nota explicativa"
    @IsOptional()
    @Field(() => String)
    tipoDocFavorecido03?: string;

    @IsOptional()
    @Field(() => String)
    numDocFavorecido03?: string;

    // "Ver nota explicativa"
    @IsOptional()
    @Field(() => String)
    tipoDocFavorecido04?: string;

    @IsOptional()
    @Field(() => String)
    numDocFavorecido04?: string;

    @IsOptional()
    @Field(() => String)
    sequencial?: string;

}