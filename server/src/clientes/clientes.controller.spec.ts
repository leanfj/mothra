import { Test, TestingModule } from '@nestjs/testing';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';

import ClienteInMemoryRepository from '../@core/infra/repository/clienteInMemoryRepository';
import CreateClienteUseCase from '../@core/application/useCases/cliente/createClienteUseCase';
import ClienteRepository from '../@core/domain/repository/clienteRepository';
import GetClienteByIDUseCase from '../@core/application/useCases/cliente/getClienteByIdUseCase';
import GetAllClienteUseCase from '../@core/application/useCases/cliente/getAllClienteUseCase';

describe('ClientesController', () => {
  let controller: ClientesController;
  let service: ClientesService;

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
        },
        {
          provide: GetAllClienteUseCase,
          useFactory: (clienteRepository: ClienteRepository) => {
            return new GetAllClienteUseCase(clienteRepository);
          },
          inject: ['ClienteInMemoryRepository'],
        },
      ],
    }).compile();

    controller = module.get<ClientesController>(ClientesController);
    service = module.get<ClientesService>(ClientesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of clientes', async () => {
      const result = [
        {
          id: 1,
          nome: 'Cliente 1',
          email: '',
          telefone: '999999999',
          endereco: 'Rua 1',
          cidade: 'Cidade 1',
          estado: 'Estado 1',
        },
        {
          id: 2,
          nome: 'Cliente 2',
          email: 'email2@email.com',
          telefone: '2222222222222',
          endereco: 'Rua 2',
          cidade: 'Cidade 2',
          estado: 'Estado 2',
        },
      ];

      jest.spyOn(service, 'findAll').mockImplementation(async () => {
        return result;
      });
      
      console.log(await controller.findAll())
      expect(await controller.findAll()).toBe(result);
    });
  });
});
