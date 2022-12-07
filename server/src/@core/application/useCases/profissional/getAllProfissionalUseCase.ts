import { ProfissionalInputDTO } from '../../../domain/dto/profissional/profissionalInputDTO'
import ProfissionalViewDTO from '../../../domain/dto/profissional/profissionalViewDTO'
import ProfissionalRepository from '../../../domain/repository/profissionalRepository'

export default class GetAllProfissionalUseCase {
  constructor(private profissionalRepository: ProfissionalRepository) {}

  async execute(): Promise<ProfissionalInputDTO[]> {
    const allProfissionais = await this.profissionalRepository.findAll()

    return allProfissionais.map((propfissional: ProfissionalViewDTO) => {
      return {
        id: propfissional.id,
        nome: propfissional.nome,
        email: propfissional.email,
        genero: propfissional.genero,
        telefone: propfissional.telefone,
        endereco: propfissional.endereco,
        cidade: propfissional.cidade,
        estado: propfissional.estado,
        servicos: propfissional.servicos
      }
    })
  }
}
