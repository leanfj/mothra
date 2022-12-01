import { ClienteInputDTO } from "../../../domain/dto/clienteInputDTO";
import Cliente from "../../../domain/entity/clienteEntity";
import ClienteRepository from "../../../domain/repository/clienteRepository";

export default class CreateClienteUseCase {
  constructor(private clienteRepository: ClienteRepository) {}

  async execute(input: ClienteInputDTO): Promise<void> {
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
    await this.clienteRepository.create(cliente);
  }
}