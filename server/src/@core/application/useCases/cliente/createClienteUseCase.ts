import { ClienteDTO } from "../../../domain/dto/clienteDTO";
import Cliente from "../../../domain/entity/clienteEntity";
import ClienteRepository from "../../../domain/repository/clienteRepository";

export default class CreateClienteUseCase {
  constructor(private clienteRepository: ClienteRepository) {}

  async execute(input: ClienteDTO): Promise<void> {
    const cliente = new Cliente(
      input.id,
      input.nome,
      input.email,
      input.telefone,
      input.endereco,
      input.cidade,
      input.estado,
      input.dataCadastro,
      input.dataAtualizacao
    )
    await this.clienteRepository.create(cliente);
  }
}