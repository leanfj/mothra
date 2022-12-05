import ServicoRepository from '../../../domain/repository/servicoRepository'

export default class DeleteServicoUseCase {
  constructor(private servicoRepository: ServicoRepository) {}

  async execute(id: string): Promise<void> {
    await this.servicoRepository.delete(id)
  }
}
