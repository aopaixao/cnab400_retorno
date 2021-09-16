import { Field, InputType } from "@nestjs/graphql";

@InputType()
// Opcional para 15 posições
export class DetalheOpcionalBoletoInput{
    // "5 ver nota explicativa"
    @Field(() => String)
    identificacaoRegistroTransacao: string;

    // "06"
    @Field(() => String)
    tiposServico: string;

    @Field(() => String)
    zeros01: string;

    @Field(() => String)
    numeroBoleto: string;

    // "Brancos"
    @Field(() => String)
    complementoRegistro: string;

    @Field(() => String)
    numSequenRegArquivo: string;


}