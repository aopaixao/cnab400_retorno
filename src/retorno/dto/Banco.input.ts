import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class BancoInput{
    @Field(() => String)
    bankCode: string;

    @Field(() => Number)
    cnabCode: number;
}