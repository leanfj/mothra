import { Test, TestingModule } from '@nestjs/testing'
import { ServicoInputDTO } from '../@core/domain/dto/servico/servicoInputDTO'
import CreateServicoUseCase from '../@core/application/useCases/servico/createServicoUseCase'
import DeleteServicoUseCase from '../@core/application/useCases/servico/deleteServicoUseCase'
import GetAllServicoUseCase from '../@core/application/useCases/servico/getAllServicoUseCase'
import GetServicoByIDUseCase from '../@core/application/useCases/servico/getServicoByIdUseCase'
import UpdateServicoUseCase from '../@core/application/useCases/servico/updateServicoUseCase'
import ServicoRepository from '../@core/domain/repository/servicoRepository'
import ServicoInMemoryRepository from '../@core/infra/repository/servicoInMemoryRepository'
import { ServicoController } from './servico.controller'
import { ServicoService } from './servico.service'

describe('ClientesController', () => {
  let controller: ServicoController
  let service: ServicoService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicoController],
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

    controller = module.get<ServicoController>(ServicoController)
    service = module.get<ServicoService>(ServicoService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('create', () => {
    it('should return serviço created', async () => {
      const servico: ServicoInputDTO = {
        nome: 'Serviço 1',
        descricao: 'Descrição do serviço 1',
        valor: 100
      }
      const result = await controller.create(servico)
      expect(result.nome).toBe(servico.nome)
    })
  })
})
