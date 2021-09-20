import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@InputType()
export class DetalheArquivoVendor{
    // 3
    @IsOptional()
    @Field(() => String)
    identificacaoRegistroDetalhe?: string;

    @IsOptional()
    @Field(() => String)
    nossoNumero?: string;

    @IsOptional()
    @Field(() => String)
    dvNossoNumero?: string;

    @IsOptional()
    @Field(() => String)
    numOperacaoVendor?: string;

    // DDMMAAAA
    @IsOptional()
    @Field(() => String)
    dataOperacaoVendor?: string;

    // ver nota explicativa
    @IsOptional()
    @Field(() => String)
    taxaJurosVendor?: string;

    @IsOptional()
    @Field(() => String)
    taxaJurosComprador?: string;

    @IsOptional()
    @Field(() => String)
    vencimentoBoleto?: string;

    @IsOptional()
    @Field(() => String)
    valorOrigVenda?: string;

    @IsOptional()
    @Field(() => String)
    valorEncargos?: string;

    @IsOptional()
    @Field(() => String)
    valorIofFinan?: string;

    @IsOptional()
    @Field(() => String)
    valAcumAbatimento?: string;

    // ver nota explicativa
    @IsOptional()
    @Field(() => String)
    indicEpocaEqualiz?: string;

    // ver nota explicativa
    @IsOptional()
    @Field(() => String)
    indicNaturezaEqualiz?: string;

    @IsOptional()
    @Field(() => String)
    valorEqualiz?: string;

    @IsOptional()
    @Field(() => String)
    valJurosProrrog?: string;

    @IsOptional()
    @Field(() => String)
    valIOFProrrog?: string;

    @IsOptional()
    @Field(() => String)
    valIOFPeriodoAtraso?: string;

    @IsOptional()
    @Field(() => String)
    nomeComprador?: string;

    // ver nota explicativa
    @IsOptional()
    @Field(() => String)
    codDocComprador?: string;

    @IsOptional()
    @Field(() => String)
    numDocComprador?: string;

    // ver nota explicativa
    @IsOptional()
    @Field(() => String)
    conversaoCnab240?: string;

    // nosso número posição 17
    @IsOptional()
    @Field(() => String)
    nossoNumeroPosicao?: string;

    @IsOptional()
    @Field(() => String)
    novoValBoleto?: string;

    @IsOptional()
    @Field(() => String)
    valEqualizEstornada?: string;

    @IsOptional()
    @Field(() => String)
    valNovaEqualiz?: string;

    @IsOptional()
    @Field(() => String)
    valDiferencaEqualiz?: string;

    // ver nota explicativa
    @IsOptional()
    @Field(() => String)
    indicativoDebCred?: string;

    // ver nota explicativa
    @IsOptional()
    @Field(() => String)
    indicNaturezaEqualiz02?: string;

    // ver nota explicativa
    @IsOptional()
    @Field(() => String)
    indicNaturezaEqualiz03?: string;

    @IsOptional()
    @Field(() => String)
    valIOFNFinanciado?: string;

    @IsOptional()
    @Field(() => String)
    valComiPermanencia?: string;

    @IsOptional()
    @Field(() => String)
    Brancos?: string;
}