import Servico from '../../domain/entity/servicoEntity'
import ServicoRepository from '../../domain/repository/servicoRepository'
import { ServicoPrismaMapper } from '../database/prisma/mappers/servicoPrismaMapper'

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

  async update(id: string, servico: Servico): Promise<Servico> {
    const index = this.servicos.findIndex((servico) => servico.id === id)

    if (index === -1) {
      throw new Error('Serviço não encontrado')
    }

    this.servicos[index] = servico

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
