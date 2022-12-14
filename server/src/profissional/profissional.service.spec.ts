import { Test, TestingModule } from '@nestjs/testing'
import DeleteProfissionalUseCase from '../@core/application/useCases/profissional/deleteProfissionalUseCase'
import GetAllProfissionalUseCase from '../@core/application/useCases/profissional/getAllProfissionalUseCase'
import UpdateProfissionalUseCase from '../@core/application/useCases/profissional/updateProfissionalUseCase'
import CreateProfissionalUseCase from '../@core/application/useCases/profissional/createProfissionalUseCase'
import GetProfissionalByIDUseCase from '../@core/application/useCases/profissional/getProfissionalByIdUseCase'
import ProfissionalRepository from '../@core/domain/repository/profissionalRepository'
import ProfissionalInMemoryRepository from '../@core/infra/repository/profissionalInMemoryRepository'
import { ProfissionalService } from './profissional.service'

describe('ProfissionalService', () => {
  let service: ProfissionalService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfissionalService,
        {
          provide: 'ProfissionalInMemoryRepository',
          useClass: ProfissionalInMemoryRepository
        },
        {
          provide: CreateProfissionalUseCase,
          useFactory: (profissionalRepository: ProfissionalRepository) => {
            return new CreateProfissionalUseCase(profissionalRepository)
          },
          inject: ['ProfissionalInMemoryRepository']
        },
        {
          provide: GetProfissionalByIDUseCase,
          useFactory: (profissionalRepository: ProfissionalRepository) => {
            return new GetProfissionalByIDUseCase(profissionalRepository)
          },
          inject: ['ProfissionalInMemoryRepository']
        },
        {
          provide: GetAllProfissionalUseCase,
          useFactory: (profissionalRepository: ProfissionalRepository) => {
            return new GetAllProfissionalUseCase(profissionalRepository)
          },
          inject: ['ProfissionalInMemoryRepository']
        },
        {
          provide: UpdateProfissionalUseCase,
          useFactory: (profissionalRepository: ProfissionalRepository) => {
            return new UpdateProfissionalUseCase(profissionalRepository)
          },
          inject: ['ProfissionalInMemoryRepository']
        },
        {
          provide: DeleteProfissionalUseCase,
          useFactory: (profissionalRepository: ProfissionalRepository) => {
            return new DeleteProfissionalUseCase(profissionalRepository)
          },
          inject: ['ProfissionalInMemoryRepository']
        }
      ]
    }).compile()

    service = module.get<ProfissionalService>(ProfissionalService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
