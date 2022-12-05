import ServicoViewDTO from '../../../domain/dto/servico/servicoViewDTO'
import ServicoRepository from '../../../domain/repository/servicoRepository'

export default class GetAllServicoUseCase {
  constructor(private servicoRepository: ServicoRepository) {}

  async execute(): Promise<ServicoViewDTO[]> {
    const allServicos = await this.servicoRepository.findAll()

    return allServicos.map((servico: ServicoViewDTO) => {
      return {
        id: servico.id,
        nome: servico.nome,
        descricao: servico.descricao,
        valor: servico.valor
      }
    })
  }
}
