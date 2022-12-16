import Servico from "../../../../domain/entity/servicoEntity"
import { DescricaoServico } from "src/@core/domain/valueObjects/descricaoServicoValueObjects"

export class ServicoPrismaMapper {
  static toPersistence(servico: Servico) {
    return {
      id: servico.id,
      nome: servico.nome,
      descricao: servico.descricao.value,
      valor: servico.valor
    }
  }

  static toDomain(servico: Servico): Servico {
    return new Servico({
      _id: servico.id,
      nome: servico.nome,
      descricao: new DescricaoServico(servico.descricao.value),
      valor: servico.valor,
      dataCadastro: servico.dataCadastro,
      dataAtualizacao: servico.dataAtualizacao
    })
  }
}