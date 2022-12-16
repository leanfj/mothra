import ServicoRepository from '../../../domain/repository/servicoRepository'

interface DeleteServicoUseCaseRequest {
  id: string
}

type DeleteServicoUseCaseResponse = void

export default class DeleteServicoUseCase {
  constructor(private servicoRepository: ServicoRepository) {}

  async execute(request: DeleteServicoUseCaseRequest): Promise<DeleteServicoUseCaseResponse> {
    const {id} = request
    await this.servicoRepository.delete(id)
  }
}
