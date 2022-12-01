import ClienteViewDTO from "src/@core/domain/dto/clienteViewDTO";
import ClienteRepository from "../../../domain/repository/clienteRepository";

export default class GetClienteByIDUseCase {
  constructor(private clienteRepository: ClienteRepository) {}

  async execute(id: number): Promise<ClienteViewDTO> {
    return await this.clienteRepository.findById(id);
  }
}