import Servico from "../../../domain/entity/servicoEntity";

export class ServicoViewModel {
  static toView(servico: Servico) {
    return {
      id: servico.id,
      nome: servico.nome,
      descricao: servico.descricao.value,
      valor: servico.valor
    }
  }
}