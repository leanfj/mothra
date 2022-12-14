import { PrismaClient } from '@prisma/client'
import { randomUUID } from 'crypto'

import ProfissionalRepository from '../../domain/repository/profissionalRepository'
import Profissional from '../../domain/entity/profissionalEntity'
import { ProfissionalInputDTO } from '../../domain/dto/profissional/profissionalInputDTO'

export default class ProfissionalPrismaRepository
  implements ProfissionalRepository
{
  constructor(private readonly prisma: PrismaClient) {}
  async getServicosByProfissionalId(id: string): Promise<any> {
    const profissional = await this.prisma.profissional.findUnique({
      where: {
        id
      },
      select: {
        servicos: {
          select: {
            servicoId: true,
            servico: {
              select: {
                nome: true
              }
            }
          }
        }
      }
    })
    
    if (!profissional) {
      throw new Error('Profissional não encontrado')
    }

    return profissional
  }

  async findAll(): Promise<Profissional[]> {
    
    const profissionalList = await this.prisma.profissional.findMany({
      include: {
        servicos: {
          select: {
            servicoId: true
          }
        }
      }
    })

    return profissionalList.map(({ servicos, ...rest }) => {
      return {
        ...rest,
        servicos: servicos.map(({ servicoId }) => {
          return servicoId
        })
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

    if (profissional.servicos) {
      return await this.prisma.profissional.create({
        data: {
          id: newProfissional.id,
          nome: newProfissional.nome,
          email: newProfissional.email,
          genero: newProfissional.genero,
          telefone: newProfissional.telefone,
          endereco: newProfissional.endereco,
          cidade: newProfissional.cidade,
          estado: newProfissional.estado,
          servicos: {
            create: profissional.servicos.map((servicoId) => {
              return {
                servico: {
                  connect: {
                    id: servicoId
                  }
                },
                id: randomUUID()
              }
            })
          }
        }
      })
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
    if (input.hasOwnProperty('servicos')) {
      const servicosList = input.servicos
      delete input.servicos

      const updatedProfissional = await this.prisma.profissional.update({
        where: { id: profissional.id },
        data: {
          ...newProfissional,
          ...input,
          servicos: {
            deleteMany: {},
            create: servicosList.map((servicoId) => {
              return {
                servico: {
                  connect: {
                    id: servicoId
                  }
                },
                id: randomUUID()
              }
            })
          }
        }
      })

      return updatedProfissional
    }

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
      throw new Error('Profissional encontrado')
    }

    await this.prisma.profissional.delete({
      where: {
        id: profissional.id
      }
    })
  }
}
