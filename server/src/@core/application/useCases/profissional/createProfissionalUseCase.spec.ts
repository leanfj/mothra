import ProfissionalInMemoryRepository from '../../../infra/repository/profissionalInMemoryRepository'
import CreateProfissionalUseCase from './createProfissionalUseCase'
import { ProfissionalInputDTO } from '../../../domain/dto/profissional/profissionalInputDTO'

describe('CreateProfissionalUseCase', () => {
  it('should be create a Profissional', async () => {
    const profissionalRepository = new ProfissionalInMemoryRepository()
    const createClienteUseCase = new CreateProfissionalUseCase(
      profissionalRepository
    )

    const profissional: ProfissionalInputDTO = {
      nome: 'Profissional 1',
      email: 'profissional@email.com',
      genero: 'Masculino',
      telefone: '999999999',
      endereco: 'Rua 1',
      cidade: 'Cidade 1',
      estado: 'Estado 1'
    }
    const profissionalCreated = await createClienteUseCase.execute(profissional)

    const profissionalData = await profissionalRepository.findById(
      profissionalCreated.id
    )

    expect(profissional.nome).toBe(profissionalData.nome)
  })
})
