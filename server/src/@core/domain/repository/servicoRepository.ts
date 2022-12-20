import Servico from '../entity/servicoEntity'
export default abstract class ServicoRepository {
  abstract findAll(): Promise<Servico[]>
  abstract findById(id: string): Promise<Servico>
  abstract create(servico: Servico): Promise<void>
  abstract update(id: string, servico: Servico): Promise<Servico>
  abstract delete(id: string): Promise<void | null>
}
