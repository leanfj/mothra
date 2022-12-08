import { Test, TestingModule } from '@nestjs/testing'
import DeleteClienteUseCase from '../@core/application/useCases/cliente/deleteClienteUseCase'
import GetAllClienteUseCase from '../@core/application/useCases/cliente/getAllClienteUseCase'
import UpdateClienteUseCase from '../@core/application/useCases/cliente/updateClienteUseCase'
import CreateProfissionalUseCase from '../@core/application/useCases/profissional/createProfissionalUseCase'
import GetProfissionalByIDUseCase from '../@core/application/useCases/profissional/getProfissionalByIdUseCase'
import ProfissionalRepository from '../@core/domain/repository/profissionalRepository'
import ProfissionalInMemoryRepository from '../@core/infra/repository/profissionalInMemoryRepository'
import { ProfissionalController } from './profissional.controller'
import { ProfissionalService } from './profissional.service'

describe('ProfissionalController', () => {
  let controller: ProfissionalController
  let service: ProfissionalService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfissionalController],
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

    controller = module.get<ProfissionalController>(ProfissionalController)
    service = module.get<ProfissionalService>(ProfissionalService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('findAll', () => {
    it('should return an array of clientes', async () => {
      const result = [
        {
          nome: 'Profissional 1',
          email: '',
          genero: 'Masculino',
          telefone: '999999999',
          endereco: 'Rua 1',
          cidade: 'Cidade 1',
          estado: 'Estado 1'
        },
        {
          nome: 'Profissional 2',
          email: 'email2@email.com',
          genero: 'Feminino',
          telefone: '2222222222222',
          endereco: 'Rua 2',
          cidade: 'Cidade 2',
          estado: 'Estado 2'
        }
      ]
      jest.spyOn(service, 'findAll').mockImplementation(async () => result)

      expect(await controller.findAll()).toBe(result)
    })
  })
})
