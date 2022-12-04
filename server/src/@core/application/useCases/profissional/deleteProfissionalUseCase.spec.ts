import { ProfissionalInputDTO } from '../../../domain/dto/profissional/profissionalInputDTO'
import ProfissionalInMemoryRepository from '../../../infra/repository/profissionalInMemoryRepository'
import DeleteProfissionalUseCase from './deleteProfissionalUseCase'

describe('DeleteProfissionalUseCase', () => {
  it('should be delete a Profissional', async () => {
    const profissionalRepository = new ProfissionalInMemoryRepository()
    const deleteProfissionalUseCase = new DeleteProfissionalUseCase(
      profissionalRepository
    )
    const profissional: ProfissionalInputDTO = {
      nome: 'Profissional 1',
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

    await deleteProfissionalUseCase.execute(profissionalData.id)

    try {
      await profissionalRepository.findById(profissionalData.id)
    } catch (error) {
      expect(error.message).toBe('Profissional não encontrado')
    }
  })
})
