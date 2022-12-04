import { ProfissionalInputDTO } from '../../../domain/dto/profissional/profissionalInputDTO'
import ProfissionalViewDTO from '../../../domain/dto/profissional/profissionalViewDTO'
import Profissional from '../../../domain/entity/profissionalEntity'
import ProfissionalRepository from '../../../domain/repository/profissionalRepository'

export default class CreateProfissionalUseCase {
  constructor(private profissionalRepository: ProfissionalRepository) {}

  async execute(input: ProfissionalInputDTO): Promise<ProfissionalViewDTO> {
    const cliente = new Profissional(
      input.id,
      input.nome,
      input.email,
      input.genero,
      input.telefone,
      input.endereco,
      input.cidade,
      input.estado
    )

    const clienteData = await this.profissionalRepository.create(cliente)

    return {
      id: clienteData.id,
      nome: clienteData.nome,
      email: clienteData.email,
      genero: clienteData.genero,
      telefone: clienteData.telefone,
      endereco: clienteData.endereco,
      cidade: clienteData.cidade,
      estado: clienteData.estado
    }
  }
}
