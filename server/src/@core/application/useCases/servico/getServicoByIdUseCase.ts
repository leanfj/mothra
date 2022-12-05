import ServicoViewDTO from '../../../domain/dto/servico/servicoViewDTO'
import ServicoRepository from '../../../domain/repository/servicoRepository'

export default class GetServicoByIDUseCase {
  constructor(private servicoRepository: ServicoRepository) {}

  async execute(id: string): Promise<ServicoViewDTO> {
    const servicoData = await this.servicoRepository.findById(id)

    return {
      id: servicoData.id,
      nome: servicoData.nome,
      descricao: servicoData.descricao,
      valor: servicoData.valor
    }
  }
}
