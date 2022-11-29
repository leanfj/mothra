import { Test, TestingModule } from '@nestjs/testing';
import { ClientesService } from './clientes.service';

import ClienteInMemoryRepository from '../@core/infra/repository/clienteInMemoryRepository';
import CreateClienteUseCase from '../@core/application/useCases/cliente/createClienteUseCase';
import ClienteRepository from '../@core/domain/repository/clienteRepository';
import GetClienteByIDUseCase from '../@core/application/useCases/cliente/getClienteByIDUseCase';

describe('ClientesService', () => {
  let service: ClientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientesService,
        {
          provide: 'ClienteInMemoryRepository',
          useClass: ClienteInMemoryRepository,
        },
        {
          provide: CreateClienteUseCase,
          useFactory: (clienteRepository: ClienteRepository) => {
            return new CreateClienteUseCase(clienteRepository);
          },
          inject: ['ClienteInMemoryRepository'],
        },
        {
          provide: GetClienteByIDUseCase,
          useFactory: (clienteRepository: ClienteRepository) => {
            return new GetClienteByIDUseCase(clienteRepository);
          },
          inject: ['ClienteInMemoryRepository'],
        },
      ],
    }).compile();

    service = module.get<ClientesService>(ClientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
