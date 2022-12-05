import { Test, TestingModule } from '@nestjs/testing'
import CreateServicoUseCase from '../@core/application/useCases/servico/createServicoUseCase'
import DeleteServicoUseCase from '../@core/application/useCases/servico/deleteServicoUseCase'
import GetAllServicoUseCase from '../@core/application/useCases/servico/getAllServicoUseCase'
import GetServicoByIDUseCase from '../@core/application/useCases/servico/getServicoByIdUseCase'
import UpdateServicoUseCase from '../@core/application/useCases/servico/updateServicoUseCase'
import ServicoRepository from '../@core/domain/repository/servicoRepository'
import ServicoInMemoryRepository from '../@core/infra/repository/servicoInMemoryRepository'
import { ServicoService } from './servico.service'

describe('ClientesService', () => {
  let service: ServicoService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ServicoService,
        {
          provide: 'ServicoInMemoryRepository',
          useClass: ServicoInMemoryRepository
        },
        {
          provide: CreateServicoUseCase,
          useFactory: (servicoRepository: ServicoRepository) => {
            return new CreateServicoUseCase(servicoRepository)
          },
          inject: ['ServicoInMemoryRepository']
        },
        {
          provide: GetServicoByIDUseCase,
          useFactory: (servicoRepository: ServicoRepository) => {
            return new GetServicoByIDUseCase(servicoRepository)
          },
          inject: ['ServicoInMemoryRepository']
        },
        {
          provide: GetAllServicoUseCase,
          useFactory: (servicoRepository: ServicoRepository) => {
            return new GetAllServicoUseCase(servicoRepository)
          },
          inject: ['ServicoInMemoryRepository']
        },
        {
          provide: UpdateServicoUseCase,
          useFactory: (servicoRepository: ServicoRepository) => {
            return new UpdateServicoUseCase(servicoRepository)
          },
          inject: ['ServicoInMemoryRepository']
        },
        {
          provide: DeleteServicoUseCase,
          useFactory: (servicoRepository: ServicoRepository) => {
            return new DeleteServicoUseCase(servicoRepository)
          },
          inject: ['ServicoInMemoryRepository']
        }
      ]
    }).compile()

    service = module.get<ServicoService>(ServicoService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
