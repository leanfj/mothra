import Servico from '../entity/servicoEntity'
export default abstract class ServicoRepository {
  abstract findAll(): Promise<Servico[]>
  abstract findById(id: string): Promise<Servico | null>
  abstract create(servico: Servico): Promise<void>
  abstract update(servico: Servico): Promise<void>
  abstract delete(id: string): Promise<void | null>
}
