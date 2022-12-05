import ProfissionalViewDTO from '../../../domain/dto/profissional/profissionalViewDTO'
import ProfissionalRepository from '../../../domain/repository/profissionalRepository'

export default class UpdateProfissionalUseCase {
  constructor(private profissionalRepository: ProfissionalRepository) {}

  async execute(id: string, input: any): Promise<ProfissionalViewDTO> {
    const profissionalData = await this.profissionalRepository.update(id, input)

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
