import Servico from '../../domain/entity/servicoEntity'
import ServicoRepository from '../../domain/repository/servicoRepository'

export default class ServicoInMemoryRepository implements ServicoRepository {
  public servicos: Servico[] = []

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

  async create(servico: Servico): Promise<void> {

    this.servicos.push(servico)

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
