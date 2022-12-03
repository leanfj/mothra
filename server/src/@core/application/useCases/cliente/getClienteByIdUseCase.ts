import ClienteViewDTO from 'src/@core/domain/dto/clienteViewDTO'
import ClienteRepository from '../../../domain/repository/clienteRepository'

export default class GetClienteByIDUseCase {
  constructor(private clienteRepository: ClienteRepository) {}

  async execute(id: number): Promise<ClienteViewDTO> {
    const clienteData = await this.clienteRepository.findById(id)

    return {
      id: clienteData.id,
      nome: clienteData.nome,
      email: clienteData.email,
      telefone: clienteData.telefone,
      endereco: clienteData.endereco,
      cidade: clienteData.cidade,
      estado: clienteData.estado
    }
  }
}
