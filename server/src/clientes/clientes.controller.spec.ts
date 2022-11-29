import { Test, TestingModule } from '@nestjs/testing';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';

import ClienteInMemoryRepository from '../@core/infra/repository/clienteInMemoryRepository';
import CreateClienteUseCase from '../@core/application/useCases/cliente/createClienteUseCase';
import ClienteRepository from '../@core/domain/repository/clienteRepository';
import GetClienteByIDUseCase from '../@core/application/useCases/cliente/getClienteByIDUseCase';

describe('ClientesController', () => {
  let controller: ClientesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientesController],
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
        }
      ],
    }).compile();

    controller = module.get<ClientesController>(ClientesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
