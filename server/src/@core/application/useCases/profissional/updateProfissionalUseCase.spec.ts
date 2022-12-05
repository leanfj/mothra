import { ProfissionalInputDTO } from '../../../domain/dto/profissional/profissionalInputDTO'
import ProfissionalInMemoryRepository from '../../../infra/repository/profissionalInMemoryRepository'
import UpdateProfissionalUseCase from './updateProfissionalUseCase'

describe('UpdateProfissionalUseCase', () => {
  it('should be update a Profissional', async () => {
    const profissionalRepository = new ProfissionalInMemoryRepository()
    const updateProfissionalUseCase = new UpdateProfissionalUseCase(
      profissionalRepository
    )

    const profissional: ProfissionalInputDTO = {
      nome: 'Cliente 1',
      email: '',
      genero: 'Masculino',
      telefone: '999999999',
      endereco: 'Rua 1',
      cidade: 'Cidade 1',
      estado: 'Estado 1'
    }
    const profissionalCreated = await profissionalRepository.create(
      profissional
    )

    const profissionalData = await profissionalRepository.findById(
      profissionalCreated.id
    )

    const newProfissionalData: ProfissionalInputDTO = {
      nome: 'Cliente 1',
      email: 'email@email.com',
      genero: 'Feminino',
      telefone: '999999999',
      endereco: 'Rua 1',
      cidade: 'Cidade 1',
      estado: 'Estado 1'
    }

    const profissionalUpdated = await updateProfissionalUseCase.execute(
      profissionalData.id,
      newProfissionalData
    )

    expect(newProfissionalData.email).toBe(profissionalUpdated.email)
    expect(newProfissionalData.genero).toBe(profissionalUpdated.genero)
  })
})
