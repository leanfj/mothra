import { ClienteInputDTO } from "../../../domain/dto/clienteInputDTO";
import Cliente from "../../../domain/entity/clienteEntity";
import ClienteRepository from "../../../domain/repository/clienteRepository";

export default class UpdateClienteUseCase {
  constructor(private clienteRepository: ClienteRepository) {}

  async execute(id: number, input: ClienteInputDTO): Promise<void> {
    const cliente = new Cliente(
      input.id,
      input.nome,
      input.email,
      input.telefone,
      input.endereco,
      input.cidade,
      input.estado,
      input.dataAtualizacao
    )
    await this.clienteRepository.update(id, cliente);
  }
}