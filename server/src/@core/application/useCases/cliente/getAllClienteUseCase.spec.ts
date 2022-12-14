import { ClienteInputDTO } from '../../../domain/dto/cliente/clienteInputDTO'
import ClienteInMemoryRepository from '../../../infra/repository/clienteInMemoryRepository'
import GetAllClienteUseCase from './getAllClienteUseCase'

describe('GetAllClienteUseCase', () => {
  it('should by return cliente list', async () => {
    const clienteRepository = new ClienteInMemoryRepository()
    const getAllClienteUseCase = new GetAllClienteUseCase(clienteRepository)

    const clienteList: ClienteInputDTO[] = [
      {
        nome: 'Cliente 1',
        email: '',
        genero: 'Marculino',
        telefone: '999999999',
        endereco: 'Rua 1',
        cidade: 'Cidade 1',
        estado: 'Estado 1'
      },
      {
        nome: 'Cliente 2',
        email: 'email2@email.com',
        genero: 'Feminino',
        telefone: '2222222222222',
        endereco: 'Rua 2',
        cidade: 'Cidade 2',
        estado: 'Estado 2'
      }
    ]

    clienteList.forEach(async (cliente) => {
      await clienteRepository.create(cliente)
    })

    const clienteData = await getAllClienteUseCase.execute()

    expect(clienteList[1].nome).toBe(clienteData[1].nome)
    expect(clienteList[0].genero).toBe(clienteData[0].genero)
  })
})
