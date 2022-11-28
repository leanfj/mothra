import Cliente from "../../domain/entity/clienteEntity";
import ClienteRepository from "../../domain/repository/clienteRepository";

export default class ClienteInMemoryRepository implements ClienteRepository {
  private clientes: Cliente[] = [];

  async findAll(): Promise<Cliente[]> {
    return this.clientes;
  }

  async findById(id: number): Promise<Cliente> {
    const cliente = this.clientes.find((cliente) => cliente.id === id);
    return cliente;
  }

  async create(cliente: Cliente): Promise<Cliente> {
    this.clientes.push(cliente);
    return cliente;
  }

  async update(cliente: Cliente): Promise<Cliente> {
    const index = this.clientes.findIndex((c) => c.id === cliente.id);
    this.clientes[index] = cliente;
    return cliente;
  }

  async delete(id: number): Promise<void> {
    const index = this.clientes.findIndex((c) => c.id === id);
    this.clientes.splice(index, 1);
  }
}