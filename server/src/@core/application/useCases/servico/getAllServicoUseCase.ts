import Servico from 'src/@core/domain/entity/servicoEntity'
import ServicoRepository from '../../../domain/repository/servicoRepository'

interface GetAllServicoUseCaseResponse {
  servicos: Servico[]
}

export default class GetAllServicoUseCase {
  constructor(private servicoRepository: ServicoRepository) {}

  async execute(): Promise<GetAllServicoUseCaseResponse> {
    const servicos = await this.servicoRepository.findAll()

    return { servicos }
  }
}
