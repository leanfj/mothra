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
import ProfissionalPrismaRepository from '../@core/infra/repository/profissionalPrismaRepository'
import { PrismaService } from 'src/prisma-service/prisma-service.service'

@Module({
  controllers: [ProfissionalController],
  providers: [
    ProfissionalService,
    PrismaService,
    {
      provide: 'ProfissionalInMemoryRepository',
      useClass: ProfissionalInMemoryRepository
    },
    {
      provide: 'ProfissionalPrismaRepository',
      // useFactory: () => {
      //   return new ProfissionalPrismaRepository(new PrismaService())
      // }
      useFactory: (prisma: PrismaService) => {
        return new ProfissionalPrismaRepository(prisma)
      },
      inject: [PrismaService]
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
