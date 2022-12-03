import { ClienteInputDTO } from 'src/@core/domain/dto/clienteInputDTO'
import Cliente from '../../domain/entity/clienteEntity'
import ClienteRepository from '../../domain/repository/clienteRepository'

export default class ClienteInMemoryRepository implements ClienteRepository {
  private clientes: Cliente[] = []

  async findAll(): Promise<Cliente[]> {
    return this.clientes
  }

  async findById(id: number): Promise<Cliente> {
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
      cliente.telefone,
      cliente.endereco,
      cliente.cidade,
      cliente.estado,
      cliente.dataAtualizacao
    )

    const clientData = this.clientes.find(
      (cliente) => cliente.id === newCliente.id
    )

    if (clientData) {
      throw new Error('Cliente já existe')
    }

    this.clientes.push(newCliente)

    return newCliente
  }

  async update(id: number, cliente: ClienteInputDTO): Promise<Cliente> {
    const newCliente = new Cliente(
      cliente.id,
      cliente.nome,
      cliente.email,
      cliente.telefone,
      cliente.endereco,
      cliente.cidade,
      cliente.estado,
      cliente.dataAtualizacao
    )

    const index = this.clientes.findIndex((c) => c.id === id)

    if (index === -1) {
      throw new Error('Cliente não encontrado')
    }

    this.clientes[index] = newCliente

    return newCliente
  }

  async delete(id: number): Promise<void> {
    const index = this.clientes.findIndex((c) => c.id === id)

    if (index === -1) {
      throw new Error('Cliente não encontrado')
    }

    this.clientes.splice(index, 1)
  }
}
