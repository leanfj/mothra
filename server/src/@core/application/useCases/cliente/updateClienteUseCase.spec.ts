import { ClienteInputDTO } from '../../../domain/dto/cliente/clienteInputDTO'
import ClienteInMemoryRepository from '../../../infra/repository/clienteInMemoryRepository'
import UpdateClienteUseCase from './updateClienteUseCase'

describe('UpdateClienteUseCase', () => {
  it('should be update a Cliente', async () => {
    const clienteRepository = new ClienteInMemoryRepository()
    const updateClienteUseCase = new UpdateClienteUseCase(clienteRepository)

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

    const newClienteData: ClienteInputDTO = {
      nome: 'Cliente 1',
      email: 'email@email.com',
      genero: 'Feminino',
      telefone: '999999999',
      endereco: 'Rua 1',
      cidade: 'Cidade 1',
      estado: 'Estado 1',
      dataAtualizacao: new Date()
    }

    const clienteUpdated = await updateClienteUseCase.execute(
      clienteData.id,
      newClienteData
    )

    expect(newClienteData.email).toBe(clienteUpdated.email)
    expect(newClienteData.genero).toBe(clienteUpdated.genero)
  })
})
