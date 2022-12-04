import ClienteViewDTO from '../../../domain/dto/cliente/clienteViewDTO'
import { ClienteInputDTO } from '../../../domain/dto/cliente/clienteInputDTO'
import Cliente from '../../../domain/entity/clienteEntity'
import ClienteRepository from '../../../domain/repository/clienteRepository'

export default class CreateClienteUseCase {
  constructor(private clienteRepository: ClienteRepository) {}

  async execute(input: ClienteInputDTO): Promise<ClienteViewDTO> {
    const cliente = new Cliente(
      input.id,
      input.nome,
      input.email,
      input.genero,
      input.telefone,
      input.endereco,
      input.cidade,
      input.estado
    )

    const clienteData = await this.clienteRepository.create(cliente)

    return {
      id: clienteData.id,
      nome: clienteData.nome,
      email: clienteData.email,
      genero: clienteData.genero,
      telefone: clienteData.telefone,
      endereco: clienteData.endereco,
      cidade: clienteData.cidade,
      estado: clienteData.estado
    }
  }
}
