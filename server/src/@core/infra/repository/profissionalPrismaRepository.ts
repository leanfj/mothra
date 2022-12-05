import { PrismaClient } from '@prisma/client'

import ProfissionalRepository from '../../domain/repository/profissionalRepository'
import Profissional from '../../domain/entity/profissionalEntity'
import { ProfissionalInputDTO } from '../../domain/dto/profissional/profissionalInputDTO'

export default class ProfissionalPrismaRepository
  implements ProfissionalRepository
{
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(): Promise<Profissional[]> {
    return await this.prisma.profissional.findMany({
      include: {
        servicos: true
      }
    })
  }

  async findById(id: string): Promise<Profissional> {
    const profissional = await this.prisma.profissional.findUnique({
      where: {
        id
      },
      include: {
        servicos: true
      }
    })

    if (!profissional) {
      throw new Error('Profissional não encontrado')
    }

    return profissional
  }

  async create(profissional: ProfissionalInputDTO): Promise<Profissional> {
    const newProfissional = new Profissional(
      profissional.id,
      profissional.nome,
      profissional.email,
      profissional.genero,
      profissional.telefone,
      profissional.endereco,
      profissional.cidade,
      profissional.estado
    )

    const profissionalData = await this.prisma.profissional.findUnique({
      where: {
        id: newProfissional.id
      }
    })

    if (profissionalData) {
      throw new Error('Profissional já existe')
    }

    return await this.prisma.profissional.create({
      data: {
        id: newProfissional.id,
        nome: newProfissional.nome,
        email: newProfissional.email,
        genero: newProfissional.genero,
        telefone: newProfissional.telefone,
        endereco: newProfissional.endereco,
        cidade: newProfissional.cidade,
        estado: newProfissional.estado
      }
    })
  }

  async update(id: string, input: any): Promise<Profissional> {
    const profissional = await this.prisma.profissional.findUnique({
      where: {
        id
      }
    })

    if (!profissional) {
      throw new Error('Profisional não encontrado')
    }

    const newProfissional = new Profissional(
      profissional.id,
      profissional.nome,
      profissional.email,
      profissional.genero,
      profissional.telefone,
      profissional.endereco,
      profissional.cidade,
      profissional.estado
    )

    const updatedProfissional = await this.prisma.profissional.update({
      where: { id: profissional.id },
      data: { ...newProfissional, ...input }
    })

    return updatedProfissional
  }

  async delete(id: string): Promise<void> {
    const profissional = await this.prisma.profissional.findUnique({
      where: {
        id
      }
    })

    if (!profissional) {
      throw new Error('Cliente Profissionalencontrado')
    }

    await this.prisma.profissional.delete({
      where: {
        id: profissional.id
      }
    })
  }
}
