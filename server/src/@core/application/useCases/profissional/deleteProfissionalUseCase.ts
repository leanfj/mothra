import ProfissionalRepository from '../../../domain/repository/profissionalRepository'

export default class DeleteProfissionalUseCase {
  constructor(private profissionalRepository: ProfissionalRepository) {}

  async execute(id: string): Promise<void> {
    await this.profissionalRepository.delete(id)
  }
}
