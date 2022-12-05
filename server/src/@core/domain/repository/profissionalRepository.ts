import Profissional from '../entity/profissionalEntity'

export default interface ProfissionalRepository {
  findAll(): Promise<Profissional[]>
  findById(id: string): Promise<Profissional>
  create(profissional: Profissional): Promise<Profissional>
  update(id: string, profissional: Profissional): Promise<Profissional>
  delete(id: string): Promise<void>
}
