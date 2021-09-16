import { Test, TestingModule } from '@nestjs/testing';
import { RetornoResolver } from './retorno.resolver';

describe('RetornoResolver', () => {
  let resolver: RetornoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RetornoResolver],
    }).compile();

    resolver = module.get<RetornoResolver>(RetornoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
