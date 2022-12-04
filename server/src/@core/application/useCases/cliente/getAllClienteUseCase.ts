import ClienteViewDTO from '../../../domain/dto/cliente/clienteViewDTO'
import ClienteRepository from '../../../domain/repository/clienteRepository'

export default class GetAllClienteUseCase {
  constructor(private clienteRepository: ClienteRepository) {}

  async execute(): Promise<ClienteViewDTO[]> {
    const allClientes = await this.clienteRepository.findAll()

    return allClientes.map((cliente: ClienteViewDTO) => {
      return {
        id: cliente.id,
        nome: cliente.nome,
        email: cliente.email,
        genero: cliente.genero,
        telefone: cliente.telefone,
        endereco: cliente.endereco,
        cidade: cliente.cidade,
        estado: cliente.estado
      }
    })
  }
}
