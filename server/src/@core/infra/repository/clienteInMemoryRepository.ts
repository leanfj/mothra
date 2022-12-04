import { ClienteInputDTO } from '../../domain/dto/cliente/clienteInputDTO'
import Cliente from '../../domain/entity/clienteEntity'
import ClienteRepository from '../../domain/repository/clienteRepository'

export default class ClienteInMemoryRepository implements ClienteRepository {
  private clientes: Cliente[] = []

  async findAll(): Promise<Cliente[]> {
    return this.clientes
  }

  async findById(id: string): Promise<Cliente> {
    const cliente = this.clientes.find((cliente) => cliente.id === id)

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

    const clienteData = this.clientes.find(
      (cliente) => cliente.id === newCliente.id
    )

    if (clienteData) {
      throw new Error('Cliente já existe')
    }

    this.clientes.push(newCliente)

    return newCliente
  }

  async update(id: string, input: any): Promise<Cliente> {
    const index = this.clientes.findIndex((cliente) => cliente.id === id)

    if (index === -1) {
      throw new Error('Cliente não encontrado')
    }

    const cliente = this.clientes[index]

    this.clientes[index] = { ...cliente, ...input }

    return this.clientes[index]
  }

  async delete(id: string): Promise<void> {
    const index = this.clientes.findIndex((c) => c.id === id)

    if (index === -1) {
      throw new Error('Cliente não encontrado')
    }

    this.clientes.splice(index, 1)
  }
}
