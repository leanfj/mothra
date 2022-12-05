import { Test, TestingModule } from '@nestjs/testing'
import DeleteClienteUseCase from '../@core/application/useCases/cliente/deleteClienteUseCase'
import GetAllClienteUseCase from '../@core/application/useCases/cliente/getAllClienteUseCase'
import UpdateClienteUseCase from '../@core/application/useCases/cliente/updateClienteUseCase'
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
          provide: GetAllClienteUseCase,
          useFactory: (profissionalRepository: ProfissionalRepository) => {
            return new GetAllClienteUseCase(profissionalRepository)
          },
          inject: ['ProfissionalInMemoryRepository']
        },
        {
          provide: UpdateClienteUseCase,
          useFactory: (profissionalRepository: ProfissionalRepository) => {
            return new UpdateClienteUseCase(profissionalRepository)
          },
          inject: ['ProfissionalInMemoryRepository']
        },
        {
          provide: DeleteClienteUseCase,
          useFactory: (profissionalRepository: ProfissionalRepository) => {
            return new DeleteClienteUseCase(profissionalRepository)
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
