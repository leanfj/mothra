import Servico from '../entity/servicoEntity'

export default interface ServicoRepository {
  findAll(): Promise<Servico[]>
  findById(id: string): Promise<Servico>
  create(servico: Servico): Promise<Servico>
  update(id: string, servico: Servico): Promise<Servico>
  delete(id: string): Promise<void>
}
