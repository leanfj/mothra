import { ProfissionalInputDTO } from '../../../domain/dto/profissional/profissionalInputDTO'
import ProfissionalInMemoryRepository from '../../../infra/repository/profissionalInMemoryRepository'
import GetProfissionalByIDUseCase from './getProfissionalByIdUseCase'

describe('GetProfessionalByIdUseCase', () => {
  it('should by return professional by id', async () => {
    const professionalRepository = new ProfissionalInMemoryRepository()
    const getProfessionalByIdUseCase = new GetProfissionalByIDUseCase(
      professionalRepository
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

    const profissionalCreated = await professionalRepository.create(
      profissional
    )

    const profissionalData = await getProfessionalByIdUseCase.execute(
      profissionalCreated.id
    )

    expect(profissional.nome).toBe(profissionalData.nome)
  })
})
