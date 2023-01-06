import Servico from 'src/@core/domain/entity/servicoEntity'
import ServicoRepository from '../../../domain/repository/servicoRepository'

export interface UpdateServicoUseCaseResponse {
  servico: Servico
}
export default class UpdateServicoUseCase {
  constructor(private servicoRepository: ServicoRepository) {}

  async execute(id: string, input: Servico): Promise<UpdateServicoUseCaseResponse> {
    const servico = await this.servicoRepository.update(id, input)

    return { servico }
  }
}
