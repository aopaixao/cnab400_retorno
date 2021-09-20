import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@InputType()
export class DetalheAuxiliarISPB{

    // 5
    @IsOptional()
    @Field(() => String)
    identificacaoRegistroDetalhe?: string;

    // 04
    @IsOptional()
    @Field(() => String)
    tipoServico?: string;

    @IsOptional()
    @Field(() => String)
    nossoNumero?: string;

    // 3x
    @IsOptional()
    @Field(() => String)
    bancoCred?: string;

    // 3x
    @IsOptional()
    @Field(() => String)
    camaraCompensacao?: string;

    // 3x "Ver nota explicativa"
    @IsOptional()
    @Field(() => String)
    codigoISPB?: string;

    // 3x
    @IsOptional()
    @Field(() => String)
    prefixAgenCred?: string;

    // 3x
    @IsOptional()
    @Field(() => String)
    dvAgenCred?: string;

    // 3x
    @IsOptional()
    @Field(() => String)
    contaCred?: string;

    // 3x
    @IsOptional()
    @Field(() => String)
    dvContaCred?: string;

    // 3x
    @IsOptional()
    @Field(() => String)
    nomeFavorecido?: string;

    // 3x
    @IsOptional()
    @Field(() => String)
    valorPartilha?: string;

    // 3x
    @IsOptional()
    @Field(() => String)
    brancos01?: string;

    // ver nota explicativa
    @IsOptional()
    @Field(() => String)
    tipoDocFavorecido01?: string;

    @IsOptional()
    @Field(() => String)
    numDocFavorecido01?: string;

    // ver nota explicativa
    @IsOptional()
    @Field(() => String)
    tipoDocFavorecido02?: string;

    @IsOptional()
    @Field(() => String)
    numDocFavorecido02?: string;

    // ver nota explicativa
    @IsOptional()
    @Field(() => String)
    tipoDocFavorecido03?: string;

    @IsOptional()
    @Field(() => String)
    numDocFavorecido03?: string;

    @IsOptional()
    @Field(() => String)
    brancos?: string;

    @IsOptional()
    @Field(() => String)
    sequencial?: string;
}