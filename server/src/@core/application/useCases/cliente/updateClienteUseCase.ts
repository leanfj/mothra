import ClienteViewDTO from '../../../domain/dto/cliente/clienteViewDTO'
import ClienteRepository from '../../../domain/repository/clienteRepository'

export default class UpdateClienteUseCase {
  constructor(private clienteRepository: ClienteRepository) {}

  async execute(id: string, input: any): Promise<ClienteViewDTO> {
    const clienteData = await this.clienteRepository.update(id, input)

    return {
      id: clienteData.id,
      nome: clienteData.nome,
      email: clienteData.email,
      genero: clienteData.genero,
      telefone: clienteData.telefone,
      endereco: clienteData.endereco,
      cidade: clienteData.cidade,
      estado: clienteData.estado,
      dataAtualizacao: clienteData.dataAtualizacao
    }
  }
}
