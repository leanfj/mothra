import { Module } from '@nestjs/common'

import { PrismaClient } from '@prisma/client'
import ServicoPrismaRepository from '../@core/infra/repository/servicoPrismaRepository'
import CreateServicoUseCase from '../@core/application/useCases/servico/createServicoUseCase'
import DeleteServicoUseCase from '../@core/application/useCases/servico/deleteServicoUseCase'
import GetAllServicoUseCase from '../@core/application/useCases/servico/getAllServicoUseCase'
import GetServicoByIDUseCase from '../@core/application/useCases/servico/getServicoByIdUseCase'
import UpdateServicoUseCase from '../@core/application/useCases/servico/updateServicoUseCase'
import ServicoRepository from '../@core/domain/repository/servicoRepository'
import ServicoInMemoryRepository from '../@core/infra/repository/servicoInMemoryRepository'
import { ServicoController } from './servico.controller'
import { ServicoService } from './servico.service'

@Module({
  controllers: [ServicoController],
  providers: [
    ServicoService,
    {
      provide: 'ServicoInMemoryRepository',
      useClass: ServicoInMemoryRepository
    },
    {
      provide: 'ServicoPrismaRepository',
      useFactory: () => {
        return new ServicoPrismaRepository(new PrismaClient())
      }
    },
    {
      provide: CreateServicoUseCase,
      useFactory: (servicoRepository: ServicoRepository) => {
        return new CreateServicoUseCase(servicoRepository)
      },
      inject: ['ServicoPrismaRepository']
    },
    {
      provide: GetServicoByIDUseCase,
      useFactory: (clienteRepository: ServicoRepository) => {
        return new GetServicoByIDUseCase(clienteRepository)
      },
      inject: ['ServicoPrismaRepository']
    },
    {
      provide: GetAllServicoUseCase,
      useFactory: (clienteRepository: ServicoRepository) => {
        return new GetAllServicoUseCase(clienteRepository)
      },
      inject: ['ServicoPrismaRepository']
    },
    {
      provide: UpdateServicoUseCase,
      useFactory: (clienteRepository: ServicoRepository) => {
        return new UpdateServicoUseCase(clienteRepository)
      },
      inject: ['ServicoPrismaRepository']
    },
    {
      provide: DeleteServicoUseCase,
      useFactory: (clienteRepository: ServicoRepository) => {
        return new DeleteServicoUseCase(clienteRepository)
      },
      inject: ['ServicoPrismaRepository']
    }
  ]
})
export class ServicoModule {}
