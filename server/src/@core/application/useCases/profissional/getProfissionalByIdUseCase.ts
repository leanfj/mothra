import ProfissionalViewDTO from '../../../domain/dto/profissional/profissionalViewDTO'
import ProfissionalRepository from '../../../domain/repository/profissionalRepository'

export default class GetProfissionalByIDUseCase {
  constructor(private ProfissionalRepository: ProfissionalRepository) {}

  async execute(id: string): Promise<ProfissionalViewDTO> {
    const profissionalData = await this.ProfissionalRepository.findById(id)

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
