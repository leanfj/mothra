import ClienteRepository from "../../../domain/repository/clienteRepository";

export default class DeleteClienteUseCase {
  constructor(private clienteRepository: ClienteRepository) {}

  async execute(id: number): Promise<void> {
    await this.clienteRepository.delete(id);
  }
}