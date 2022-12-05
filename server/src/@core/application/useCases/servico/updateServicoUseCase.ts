import ServicoViewDTO from '../../../domain/dto/servico/servicoViewDTO'
import ServicoRepository from '../../../domain/repository/servicoRepository'

export default class UpdateServicoUseCase {
  constructor(private servicoRepository: ServicoRepository) {}

  async execute(id: string, input: any): Promise<ServicoViewDTO> {
    const servicoData = await this.servicoRepository.update(id, input)

    return {
      id: servicoData.id,
      nome: servicoData.nome,
      descricao: servicoData.descricao,
      valor: servicoData.valor
    }
  }
}
