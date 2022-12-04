import { ProfissionalInputDTO } from '../../../domain/dto/profissional/profissionalInputDTO'
import ProfissionalViewDTO from '../../../domain/dto/profissional/profissionalViewDTO'
import ProfissionalRepository from '../../../domain/repository/profissionalRepository'

export default class GetAllProfissionalUseCase {
  constructor(private profissionalRepository: ProfissionalRepository) {}

  async execute(): Promise<ProfissionalInputDTO[]> {
    const allProfissionais = await this.profissionalRepository.findAll()

    return allProfissionais.map((cliente: ProfissionalViewDTO) => {
      return {
        id: cliente.id,
        nome: cliente.nome,
        email: cliente.email,
        genero: cliente.genero,
        telefone: cliente.telefone,
        endereco: cliente.endereco,
        cidade: cliente.cidade,
        estado: cliente.estado
      }
    })
  }
}
