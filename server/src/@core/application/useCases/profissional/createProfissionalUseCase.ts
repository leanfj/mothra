import { ProfissionalInputDTO } from '../../../domain/dto/profissional/profissionalInputDTO'
import ProfissionalViewDTO from '../../../domain/dto/profissional/profissionalViewDTO'
import Profissional from '../../../domain/entity/profissionalEntity'
import ProfissionalRepository from '../../../domain/repository/profissionalRepository'

export default class CreateProfissionalUseCase {
  constructor(private profissionalRepository: ProfissionalRepository) {}

  async execute(input: ProfissionalInputDTO): Promise<ProfissionalViewDTO> {
    const profissional = new Profissional(
      input.id,
      input.nome,
      input.email,
      input.genero,
      input.telefone,
      input.endereco,
      input.cidade,
      input.estado
    )

    const profissionalData = await this.profissionalRepository.create(
      profissional
    )

    return {
      id: profissionalData.id,
      nome: profissionalData.nome,
      email: profissionalData.email,
      genero: profissionalData.genero,
      telefone: profissionalData.telefone,
      endereco: profissionalData.endereco,
      cidade: profissionalData.cidade,
      estado: profissionalData.estado
    }
  }
}
