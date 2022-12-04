import { ClienteInputDTO } from '../../../domain/dto/cliente/clienteInputDTO'
import ClienteInMemoryRepository from '../../../infra/repository/clienteInMemoryRepository'
import DeleteClienteUseCase from './deleteClienteUseCase'

describe('DeleteClienteUseCase', () => {
  it('should be delete a Cliente', async () => {
    const clienteRepository = new ClienteInMemoryRepository()
    const deleteClienteUseCase = new DeleteClienteUseCase(clienteRepository)

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

    const clienteData = await clienteRepository.findById(clienteCreated.id)

    await deleteClienteUseCase.execute(clienteData.id)

    try {
      await clienteRepository.findById(clienteData.id)
    } catch (error) {
      expect(error.message).toBe('Cliente não encontrado')
    }
  })
})
