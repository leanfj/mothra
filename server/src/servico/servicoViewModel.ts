import ServicoViewDTO from "../@core/domain/dto/servico/servicoViewDTO";
import Servico from "../@core/domain/entity/servicoEntity";

export class ServicoViewModel {
  static toView(servico: Servico): ServicoViewDTO {
    return {
      id: servico.id,
      nome: servico.nome,
      descricao: servico.descricao.value,
      valor: servico.valor
    }
  }
}