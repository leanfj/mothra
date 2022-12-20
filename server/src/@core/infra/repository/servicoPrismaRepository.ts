import { DescricaoServico } from '../../../@core/domain/valueObjects/descricaoServicoValueObjects'
import { PrismaService } from '../../../prisma-service/prisma-service.service'
import Servico from '../../domain/entity/servicoEntity'
import ServicoRepository from '../../domain/repository/servicoRepository'
import { ServicoPrismaMapper } from '../database/prisma/mappers/servicoPrismaMapper'

export default class ServicoPrismaRepository implements ServicoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Servico[]> {
    const servicos = await this.prisma.servico.findMany() 
    return servicos.map(ServicoPrismaMapper.toDomain)
  }

  async findById(servicoId: string): Promise<Servico> {
    const servico = await this.prisma.servico.findUnique({
      where: {
        id: servicoId
      }
    })

    if (!servico) {
      throw new Error('Serviço não encontrado')
    }

    return ServicoPrismaMapper.toDomain(servico)
  }

  async create(servico: Servico): Promise<void> {
    const servicoDados = await this.prisma.servico.findMany({
      where: {
        nome: servico.nome
      }
    })

    if (servicoDados.length > 0) {
      throw new Error('Serviço já existe')
    }

    const servicoNovo = ServicoPrismaMapper.toPersistence(servico)

    await this.prisma.servico.create({
      data: servicoNovo
    })
  }

  async update(id: string, data: any): Promise<Servico> {
    const servicoDados = await this.prisma.servico.findUnique({
      where: {
        id: id
      }
    })

    if (!servicoDados) {
      throw new Error('Serviço não encontrado')
    }

    await this.prisma.servico.update({
      where: { id },
      data: { ...servicoDados, ...data}
    })

    const servicoAtualizado = await this.prisma.servico.findUnique({
      where: {
        id: id
      }
    })

    return ServicoPrismaMapper.toDomain(servicoAtualizado)

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
