import { ClienteInputDTO } from '../../../domain/dto/cliente/clienteInputDTO'
import ClienteInMemoryRepository from '../../../infra/repository/clienteInMemoryRepository'
import GetClienteByIDUseCase from './getClienteByIdUseCase'

describe('GetClienteByIdUseCase', () => {
  it('should by return cliente by id', async () => {
    const clienteRepository = new ClienteInMemoryRepository()
    const getClienteByIdUseCase = new GetClienteByIDUseCase(clienteRepository)

    const cliente: ClienteInputDTO = {
      nome: 'Cliente 1',
      email: '',
      genero: 'Masculino',
      telefone: '999999999',
      endereco: 'Rua 1',
      cidade: 'Cidade 1',
      estado: 'Estado 1'
    }

    const clienteCreated = await clienteRepository.create(cliente)

    const clienteData = await getClienteByIdUseCase.execute(clienteCreated.id)

    expect(cliente.nome).toBe(clienteData.nome)
  })
})
