import { Module } from '@nestjs/common';
import { RetornoService } from './retorno.service';
import { RetornoResolver } from './retorno.resolver';

@Module({
  providers: [RetornoService, RetornoResolver]
})
export class RetornoModule {}
