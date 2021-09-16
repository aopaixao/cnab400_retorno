import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RetornoResolver } from './retorno/retorno.resolver';
import { RetornoService } from './retorno/retorno.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, RetornoService, RetornoResolver],
})
export class AppModule {}
