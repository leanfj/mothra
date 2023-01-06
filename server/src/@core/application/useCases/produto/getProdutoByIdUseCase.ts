import Servico from 'src/@core/domain/entity/servicoEntity'
import ServicoRepository from '../../../domain/repository/servicoRepository'
export interface GetServicoUseCaseResponse {
  servico: Servico
}
export default class GetServicoByIDUseCase {
  constructor(private servicoRepository: ServicoRepository) {}

  async execute(id: string): Promise<GetServicoUseCaseResponse> {
    const servico = await this.servicoRepository.findById(id)

    return { servico }
  }
}
