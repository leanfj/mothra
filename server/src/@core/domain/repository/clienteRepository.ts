import Cliente from '../entity/clienteEntity'

export default interface ClienteRepository {
  findAll(): Promise<Cliente[]>
  findById(id: string): Promise<Cliente>
  create(cliente: Cliente): Promise<Cliente>
  update(id: string, cliente: Cliente): Promise<Cliente>
  delete(id: string): Promise<void>
}
