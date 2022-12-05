import { PrismaClient } from '@prisma/client'
import { ServicoInputDTO } from '../../domain/dto/servico/servicoInputDTO'
import Servico from '../../domain/entity/servicoEntity'
import ServicoRepository from '../../domain/repository/servicoRepository'

export default class ServicoPrismaRepository implements ServicoRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(): Promise<Servico[]> {
    return await this.prisma.servico.findMany()
  }

  async findById(id: string): Promise<Servico> {
    const servico = await this.prisma.servico.findUnique({
      where: {
        id
      }
    })

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

    const servicoData = await this.prisma.servico.findMany({
      where: {
        nome: newServico.nome
      }
    })

    if (servicoData.length > 0) {
      throw new Error('Serviço já existe')
    }

    return await this.prisma.servico.create({
      data: {
        id: newServico.id,
        nome: newServico.nome,
        descricao: newServico.descricao,
        valor: newServico.valor
      }
    })
  }

  async update(id: string, input: any): Promise<Servico> {
    const servico = await this.prisma.servico.findUnique({
      where: {
        id
      }
    })

    if (!servico) {
      throw new Error('Serviço não encontrado')
    }

    const newServico = new Servico(
      servico.id,
      servico.nome,
      servico.descricao,
      servico.valor
    )

    const updatedServico = await this.prisma.servico.update({
      where: { id: servico.id },
      data: { ...newServico, ...input }
    })

    return updatedServico
  }

  async delete(id: string): Promise<void> {
    const servico = await this.prisma.servico.findUnique({
      where: {
        id
      }
    })

    if (!servico) {
      throw new Error('Serviço não encontrado')
    }

    await this.prisma.servico.delete({
      where: {
        id: servico.id
      }
    })
  }
}
