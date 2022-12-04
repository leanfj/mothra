import Profissional from '../entity/clienteEntity'

export default interface ProfissionalRepository {
  findAll(): Promise<Profissional[]>
  findById(id: string): Promise<Profissional>
  create(cliente: Profissional): Promise<Profissional>
  update(id: string, cliente: Profissional): Promise<Profissional>
  delete(id: string): Promise<void>
}
