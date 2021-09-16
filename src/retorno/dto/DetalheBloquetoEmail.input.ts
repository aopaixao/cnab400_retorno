import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class DetalheBloquetoInput{
    // "5"
    @Field(() => String)
    identificacaoRegistroTransacao: string;

    // "01"
    @Field(() => String)
    tipoServico: string;

    @Field(() => String)
    zeros: string;

    @Field(() => String)
    emailRemessa: string;

    @Field(() => String)
    brancos: string;

    @Field(() => String)
    sequencialRegistro: string;
}