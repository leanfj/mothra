import { Module } from '@nestjs/common';

import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import ClienteInMemoryRepository from '../@core/infra/repository/clienteInMemoryRepository';
import CreateClienteUseCase from '../@core/application/useCases/cliente/createClienteUseCase';
import ClienteRepository from '../@core/domain/repository/clienteRepository';
import GetClienteByIDUseCase from '../@core/application/useCases/cliente/getClienteByIdUseCase';
import GetAllClienteUseCase from 'src/@core/application/useCases/cliente/getAllClienteUseCase';

@Module({
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
    }
  ]  
})
export class ClientesModule {}
