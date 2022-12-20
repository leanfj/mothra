import Servico from "../../../../domain/entity/servicoEntity"
import {servico as rawServico} from "@prisma/client"
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

  static toDomain(servico: rawServico): Servico {

    return new Servico({
      nome: servico.nome,
      descricao: new DescricaoServico(servico.descricao),
      valor: servico.valor,
    }, servico.id)
  }
}