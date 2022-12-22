import { DescricaoServico } from '../../../domain/valueObjects/descricaoServicoValueObjects'
import Servico from '../../../domain/entity/servicoEntity'
import ServicoRepository from '../../../domain/repository/servicoRepository'

export interface CreateServicoUseCaseRequest {
  nome: string
  descricao: string
  valor: number
}

export interface CreateServicoUseCaseResponse {
  servico: Servico
}
export default class CreateServicoUseCase {
  constructor(private servicoRepository: ServicoRepository) {}

  async execute(
    input: CreateServicoUseCaseRequest
  ): Promise<CreateServicoUseCaseResponse> {
    const { nome, descricao, valor } = input

    const servico = new Servico({
      nome,
      descricao: new DescricaoServico(descricao),
      valor
    })

    await this.servicoRepository.create(servico)

    return {
      servico
    }
  }
}
