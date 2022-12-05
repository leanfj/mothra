import { Test, TestingModule } from '@nestjs/testing'
import { ClientesController } from './clientes.controller'
import { ClientesService } from './clientes.service'

import ClienteInMemoryRepository from '../@core/infra/repository/clienteInMemoryRepository'
import CreateClienteUseCase from '../@core/application/useCases/cliente/createClienteUseCase'
import ClienteRepository from '../@core/domain/repository/clienteRepository'
import GetClienteByIDUseCase from '../@core/application/useCases/cliente/getClienteByIdUseCase'
import GetAllClienteUseCase from '../@core/application/useCases/cliente/getAllClienteUseCase'
import DeleteClienteUseCase from '../@core/application/useCases/cliente/deleteClienteUseCase'
import UpdateClienteUseCase from '../@core/application/useCases/cliente/updateClienteUseCase'

describe('ClientesController', () => {
  let controller: ClientesController
  let service: ClientesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientesController],
      providers: [
        ClientesService,
        {
          provide: 'ClienteInMemoryRepository',
          useClass: ClienteInMemoryRepository
        },
        {
          provide: CreateClienteUseCase,
          useFactory: (clienteRepository: ClienteRepository) => {
            return new CreateClienteUseCase(clienteRepository)
          },
          inject: ['ClienteInMemoryRepository']
        },
        {
          provide: GetClienteByIDUseCase,
          useFactory: (clienteRepository: ClienteRepository) => {
            return new GetClienteByIDUseCase(clienteRepository)
          },
          inject: ['ClienteInMemoryRepository']
        },
        {
          provide: GetAllClienteUseCase,
          useFactory: (clienteRepository: ClienteRepository) => {
            return new GetAllClienteUseCase(clienteRepository)
          },
          inject: ['ClienteInMemoryRepository']
        },
        {
          provide: UpdateClienteUseCase,
          useFactory: (clienteRepository: ClienteRepository) => {
            return new UpdateClienteUseCase(clienteRepository)
          },
          inject: ['ClienteInMemoryRepository']
        },
        {
          provide: DeleteClienteUseCase,
          useFactory: (clienteRepository: ClienteRepository) => {
            return new DeleteClienteUseCase(clienteRepository)
          },
          inject: ['ClienteInMemoryRepository']
        }
      ]
    }).compile()

    controller = module.get<ClientesController>(ClientesController)
    service = module.get<ClientesService>(ClientesService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('create', () => {
    it('should return cliente created', async () => {
      const cliente = {
        nome: 'Cliente 1',
        email: '',
        genero: 'Masculino',
        telefone: '999999999',
        endereco: 'Rua 1',
        cidade: 'Cidade 1',
        estado: 'Estado 1'
      }
      const result = await controller.create(cliente)
      expect(result.nome).toBe(cliente.nome)
    })
  })
})
