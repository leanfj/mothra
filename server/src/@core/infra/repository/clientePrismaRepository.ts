import { PrismaClient } from '@prisma/client'
import { ClienteInputDTO } from '../../domain/dto/cliente/clienteInputDTO'
import Cliente from '../../domain/entity/clienteEntity'
import ClienteRepository from '../../domain/repository/clienteRepository'

export default class ClientePrismaRepository implements ClienteRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(): Promise<Cliente[]> {
    return await this.prisma.cliente.findMany()
  }

  async findById(id: string): Promise<Cliente> {
    const cliente = await this.prisma.cliente.findUnique({
      where: {
        id
      }
    })

    if (!cliente) {
      throw new Error('Cliente não encontrado')
    }

    return cliente
  }

  async create(cliente: ClienteInputDTO): Promise<Cliente> {
    const newCliente = new Cliente(
      cliente.id,
      cliente.nome,
      cliente.email,
      cliente.genero,
      cliente.telefone,
      cliente.endereco,
      cliente.cidade,
      cliente.estado,
      cliente.dataAtualizacao
    )

    const clienteData = await this.prisma.cliente.findUnique({
      where: {
        id: newCliente.id
      }
    })

    if (clienteData) {
      throw new Error('Cliente já existe')
    }

    return await this.prisma.cliente.create({
      data: {
        id: newCliente.id,
        nome: newCliente.nome,
        email: newCliente.email,
        genero: newCliente.genero,
        telefone: newCliente.telefone,
        endereco: newCliente.endereco,
        cidade: newCliente.cidade,
        estado: newCliente.estado,
        dataCadastro: newCliente.dataCadastro,
        dataAtualizacao: newCliente.dataAtualizacao
      }
    })
  }

  async update(id: string, input: any): Promise<Cliente> {
    const cliente = await this.prisma.cliente.findUnique({
      where: {
        id
      }
    })

    if (!cliente) {
      throw new Error('Cliente não encontrado')
    }

    const updatedCliente = await this.prisma.cliente.update({
      where: { id: cliente.id },
      data: { ...cliente, ...input }
    })

    return updatedCliente
  }

  async delete(id: string): Promise<void> {
    const cliente = await this.prisma.cliente.findUnique({
      where: {
        id
      }
    })

    if (!cliente) {
      throw new Error('Cliente não encontrado')
    }

    await this.prisma.cliente.delete({
      where: {
        id: cliente.id
      }
    })
  }
}
