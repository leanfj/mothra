import { Module } from '@nestjs/common'
import { ProfissionalService } from './profissional.service'
import { ProfissionalController } from './profissional.controller'
import ProfissionalInMemoryRepository from '../@core/infra/repository/profissionalInMemoryRepository'
import CreateProfissionalUseCase from '../@core/application/useCases/profissional/createProfissionalUseCase'
import ProfissionalRepository from '../@core/domain/repository/profissionalRepository'
import GetProfissionalByIDUseCase from '../@core/application/useCases/profissional/getProfissionalByIdUseCase'
import GetAllProfissionalUseCase from '../@core/application/useCases/profissional/getAllProfissionalUseCase'
import UpdateProfissionalUseCase from '../@core/application/useCases/profissional/updateProfissionalUseCase'
import DeleteProfissionalUseCase from '../@core/application/useCases/profissional/deleteProfissionalUseCase'
import { PrismaClient } from '@prisma/client'
import ProfissionalPrismaRepository from '../@core/infra/repository/profissionalPrismaRepository'

@Module({
  controllers: [ProfissionalController],
  providers: [
    ProfissionalService,
    {
      provide: 'ProfissionalInMemoryRepository',
      useClass: ProfissionalInMemoryRepository
    },
    {
      provide: 'ProfissionalPrismaRepository',
      useFactory: () => {
        return new ProfissionalPrismaRepository(new PrismaClient())
      }
    },
    {
      provide: CreateProfissionalUseCase,
      useFactory: (profissionalRepository: ProfissionalRepository) => {
        return new CreateProfissionalUseCase(profissionalRepository)
      },
      inject: ['ProfissionalPrismaRepository']
    },
    {
      provide: GetProfissionalByIDUseCase,
      useFactory: (profissionalRepository: ProfissionalRepository) => {
        return new GetProfissionalByIDUseCase(profissionalRepository)
      },
      inject: ['ProfissionalPrismaRepository']
    },
    {
      provide: GetAllProfissionalUseCase,
      useFactory: (profissionalRepository: ProfissionalRepository) => {
        return new GetAllProfissionalUseCase(profissionalRepository)
      },
      inject: ['ProfissionalPrismaRepository']
    },
    {
      provide: UpdateProfissionalUseCase,
      useFactory: (profissionalRepository: ProfissionalRepository) => {
        return new UpdateProfissionalUseCase(profissionalRepository)
      },
      inject: ['ProfissionalPrismaRepository']
    },
    {
      provide: DeleteProfissionalUseCase,
      useFactory: (profissionalRepository: ProfissionalRepository) => {
        return new DeleteProfissionalUseCase(profissionalRepository)
      },
      inject: ['ProfissionalPrismaRepository']
    }
  ]
})
export class ProfissionalModule {}
