import { ServicoInputDTO } from '../../../domain/dto/servico/servicoInputDTO'
import ServicoViewDTO from '../../../domain/dto/servico/servicoViewDTO'
import Servico from '../../../domain/entity/servicoEntity'
import ServicoRepository from '../../../domain/repository/servicoRepository'

export default class CreateServicoUseCase {
  constructor(private servicoRepository: ServicoRepository) {}

  async execute(input: ServicoInputDTO): Promise<ServicoViewDTO> {
    const servico = new Servico(
      input.id,
      input.nome,
      input.descricao,
      input.valor
    )

    const servicoData = await this.servicoRepository.create(servico)

    return {
      id: servicoData.id,
      nome: servicoData.nome,
      descricao: servicoData.descricao,
      valor: servicoData.valor
    }
  }
}
