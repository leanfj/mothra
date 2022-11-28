import Cliente from "../entity/clienteEntity";

export default interface ClienteRepository {
  findAll(): Promise<Cliente[]>;
  findById(id: number): Promise<Cliente>;
  create(cliente: Cliente): Promise<Cliente>;
  update(cliente: Cliente): Promise<Cliente>;
  delete(id: number): Promise<void>;
}