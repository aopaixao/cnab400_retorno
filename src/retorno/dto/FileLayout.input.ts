import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { BancoInput } from "./Banco.input";
import { DetalheArquivoVendor } from "./DetalheArquivoVendor.input";
import { DetalheAuxiliarISPB } from "./DetalheAuxiliarISPB.input";
import { DetalheAuxiliarRetornoInput } from "./DetalheAuxiliarRetorno.input";
import { DetalheBloquetoInput } from "./DetalheBloquetoEmail.input";
import { DetalheBoletoPixInput } from "./DetalheBoletoPix.input";
import { DetalheChequeInput } from "./DetalheCheque.input";
import { DetalheOpcionalBoletoInput } from "./DetalheOpcionalBoleto.input";
import { DetalheRetornoInput } from "./DetalheRetorno.input";
import { HeaderRetornoInput } from "./HeaderRetorno.input";
import { TrailerArquivoInput } from "./TrailerArquivoRetorno.input";

@InputType()
export class FileLayoutInput{

    @Field(() => HeaderRetornoInput)
    headerRetornoInput : HeaderRetornoInput;

    @Field(() => DetalheRetornoInput)
    detalheRetornoInput : DetalheRetornoInput;

    @Field(() => TrailerArquivoInput)
    trailerRetornoInput : TrailerArquivoInput;

    @Field(() => BancoInput)
    bancoInput : BancoInput;
    
    // @IsOptional()
    // @Field(() => DetalheArquivoVendor)
    // detalheArquivoVendor ?: DetalheArquivoVendor;

    // @IsOptional()
    // @Field(() => DetalheAuxiliarISPB)
    // detalheAuxiliarISPB ?: DetalheAuxiliarISPB;

    // @IsOptional()
    // @Field(() => DetalheAuxiliarRetornoInput)
    // detalheAuxiliarRetorno ?: DetalheAuxiliarRetornoInput;

    // @IsOptional()
    // @Field(() => DetalheBloquetoInput)
    // detalheBloquetoEmail ?: DetalheBloquetoInput;

    // @IsOptional()
    // @Field(() => DetalheBoletoPixInput)
    // detalheBoletoPix ?: DetalheBoletoPixInput;

    // @IsOptional()
    // @Field(() => DetalheChequeInput)
    // detalheCheque ?: DetalheChequeInput;

    // @IsOptional()
    // @Field(() => DetalheOpcionalBoletoInput)
    // detalheOpcionalBoleto ?: DetalheOpcionalBoletoInput;

}