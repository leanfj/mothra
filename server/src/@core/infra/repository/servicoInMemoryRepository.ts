import { ServicoInputDTO } from '../../domain/dto/servico/servicoInputDTO'
import Servico from '../../domain/entity/servicoEntity'
import ServicoRepository from '../../domain/repository/servicoRepository'

export default class ServicoInMemoryRepository implements ServicoRepository {
  private servicos: Servico[] = []

  async findAll(): Promise<Servico[]> {
    return this.servicos
  }

  async findById(id: string): Promise<Servico> {
    const servico = this.servicos.find((servico) => servico.id === id)

    if (!servico) {
      throw new Error('Serviço não encontrado')
    }

    return servico
  }

  async create(servico: ServicoInputDTO): Promise<Servico> {
    const newServico = new Servico(
      servico.id,
      servico.nome,
      servico.descricao,
      servico.valor
    )

    const servicoData = this.servicos.find(
      (servico) => servico.id === newServico.id
    )

    if (servicoData) {
      throw new Error('Serviço já existe')
    }

    this.servicos.push(newServico)

    return newServico
  }

  async update(id: string, input: any): Promise<Servico> {
    const index = this.servicos.findIndex((servico) => servico.id === id)

    if (index === -1) {
      throw new Error('Serviço não encontrado')
    }

    const servico = this.servicos[index]

    this.servicos[index] = { ...servico, ...input }

    return this.servicos[index]
  }

  async delete(id: string): Promise<void> {
    const index = this.servicos.findIndex((servico) => servico.id === id)

    if (index === -1) {
      throw new Error('Serviço não encontrado')
    }

    this.servicos.splice(index, 1)
  }
}
