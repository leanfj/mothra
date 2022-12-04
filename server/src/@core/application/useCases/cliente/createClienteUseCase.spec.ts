import { ClienteInputDTO } from '../../../domain/dto/cliente/clienteInputDTO'
import ClienteInMemoryRepository from '../../../infra/repository/clienteInMemoryRepository'
import CreateClienteUseCase from './createClienteUseCase'

describe('CreateClienteUseCase', () => {
  it('should be create a Cliente', async () => {
    const clienteRepository = new ClienteInMemoryRepository()
    const createClienteUseCase = new CreateClienteUseCase(clienteRepository)

    const cliente: ClienteInputDTO = {
      nome: 'Cliente 1',
      email: '',
      genero: 'Masculino',
      telefone: '999999999',
      endereco: 'Rua 1',
      cidade: 'Cidade 1',
      estado: 'Estado 1'
    }
    const clienteCreated = await createClienteUseCase.execute(cliente)

    const clienteData = await clienteRepository.findById(clienteCreated.id)

    expect(cliente.nome).toBe(clienteData.nome)
  })
})
