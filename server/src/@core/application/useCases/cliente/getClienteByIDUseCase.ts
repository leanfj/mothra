import { ClienteDTO } from "../../../domain/dto/clienteDTO";
import ClienteRepository from "../../../domain/repository/clienteRepository";

export default class GetClienteByIDUseCase {
  constructor(private clienteRepository: ClienteRepository) {}

  async execute(id: number): Promise<ClienteDTO> {
    return await this.clienteRepository.findById(id);
  }
}