import { Module } from '@nestjs/common'

import { ClientesService } from './clientes.service'
import { ClientesController } from './clientes.controller'
import CreateClienteUseCase from '../@core/application/useCases/cliente/createClienteUseCase'
import ClienteRepository from '../@core/domain/repository/clienteRepository'
import GetClienteByIDUseCase from '../@core/application/useCases/cliente/getClienteByIdUseCase'
import GetAllClienteUseCase from '../@core/application/useCases/cliente/getAllClienteUseCase'
import UpdateClienteUseCase from '../@core/application/useCases/cliente/updateClienteUseCase'
import DeleteClienteUseCase from '../@core/application/useCases/cliente/deleteClienteUseCase'
import ClientePrismaRepository from '../@core/infra/repository/clientePrismaRepository'
import ClienteInMemoryRepository from '../@core/infra/repository/clienteInMemoryRepository'
import { PrismaService } from 'src/prisma-service/prisma-service.service'

@Module({
  controllers: [ClientesController],
  providers: [
    ClientesService,
    {
      provide: 'ClienteInMemoryRepository',
      useClass: ClienteInMemoryRepository
    },
    {
      provide: 'ClientePrismaRepository',
      useFactory: () => {
        return new ClientePrismaRepository(new PrismaService())
      }
    },
    {
      provide: CreateClienteUseCase,
      useFactory: (clienteRepository: ClienteRepository) => {
        return new CreateClienteUseCase(clienteRepository)
      },
      inject: ['ClientePrismaRepository']
    },
    {
      provide: GetClienteByIDUseCase,
      useFactory: (clienteRepository: ClienteRepository) => {
        return new GetClienteByIDUseCase(clienteRepository)
      },
      inject: ['ClientePrismaRepository']
    },
    {
      provide: GetAllClienteUseCase,
      useFactory: (clienteRepository: ClienteRepository) => {
        return new GetAllClienteUseCase(clienteRepository)
      },
      inject: ['ClientePrismaRepository']
    },
    {
      provide: UpdateClienteUseCase,
      useFactory: (clienteRepository: ClienteRepository) => {
        return new UpdateClienteUseCase(clienteRepository)
      },
      inject: ['ClientePrismaRepository']
    },
    {
      provide: DeleteClienteUseCase,
      useFactory: (clienteRepository: ClienteRepository) => {
        return new DeleteClienteUseCase(clienteRepository)
      },
      inject: ['ClientePrismaRepository']
    }
  ]
})
export class ClientesModule {}
