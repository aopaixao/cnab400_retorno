import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@InputType()
export class HeaderRetornoInput{

    // "0"
    @IsOptional()
    @Field(() => String)
    identificacaoRegistro?: string = '0';

    // "2"
    @IsOptional()
    @Field(() => String)
    tipoOperacao?: string = '2';

    // "Retorno"
    @IsOptional()
    @Field(() => String)
    identificacaoOperacao?: string = 'RETORNO';

    // "01"
    @IsOptional()
    @Field(() => String)
    tipoServico?: string = '01';

    // "COBRANCA"
    @IsOptional()
    @Field(() => String)
    extensoTipoServico?: string = 'COBRANCA';

    // "Brancos"
    @IsOptional()
    @Field(() => String)
    complementoRegistro01?: string = '        ';

    @Field(() => String)
    numeroAgencia: string;

    @Field(() => String)
    dvAgencia: string;

    @Field(() => String)
    conta: string;

    @Field(() => String)
    dvCedente: string;

    @IsOptional()
    @Field(() => String)
    zeros01?: string = '      ';

    @Field(() => String)
    nomeCedente: string;

    @IsOptional()
    @Field(() => String)
    banco01?: string = '001BRANCODOBRASIL';

    // "DDMMAA"
    @Field(() => String)
    dataGravacao: string;

    @Field(() => String)
    sequencialRetorno: string;

    @IsOptional()
    @Field(() => String)
    complementoRegistro02?: string = ' ';

    @Field(() => String)
    numeroConvenio: string;

    @IsOptional()
    @Field(() => String)
    complementoRegistro03?: string = ' ';

    // @IsOptional()
    // @Field(() => String)
    // sequencialRegistro?: string;
}