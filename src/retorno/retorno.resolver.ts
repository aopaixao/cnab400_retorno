import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FileLayoutInput } from './dto/FileLayout.input';
import { RetornoService } from './retorno.service';

@Resolver()
export class RetornoResolver {
    constructor(
        private readonly retornoService : RetornoService,
      ) {}
    
      @Query(() => String)
      helloWorld(): String {
        return "Hello World";
      }

      @Mutation(() => String)
      generateCnab400(@Args({ name: 'fileLayoutInput', type: () => FileLayoutInput}) fileLayoutInput : FileLayoutInput) : Promise<String>{
        return this.retornoService.generateCnab400(fileLayoutInput);
      }
}
