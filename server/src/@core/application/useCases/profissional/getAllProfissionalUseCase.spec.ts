import { ProfissionalInputDTO } from '../../../domain/dto/profissional/profissionalInputDTO'
import ProfissionalInMemoryRepository from '../../../infra/repository/profissionalInMemoryRepository'
import GetAllProfissionalUseCase from './getAllProfissionalUseCase'

describe('GetAllProfissionalUseCase', () => {
  it('should by return profissional list', async () => {
    const profissionalRepository = new ProfissionalInMemoryRepository()
    const getAllProfissionalUseCase = new GetAllProfissionalUseCase(
      profissionalRepository
    )

    const profissionalList: ProfissionalInputDTO[] = [
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

    profissionalList.forEach(async (profissional) => {
      await profissionalRepository.create(profissional)
    })

    const profissionalData = await getAllProfissionalUseCase.execute()

    expect(profissionalList[1].nome).toBe(profissionalData[1].nome)
    expect(profissionalList[0].genero).toBe(profissionalData[0].genero)
  })
})
