import Produto from "../../../../domain/entity/produtoEntity"
import {produto as rawProduto} from "@prisma/client"

export class ProdutoPrismaMapper {
  static toPersistence(produto: Produto) {
    return {
      id: produto.id,
      descricao: produto.descricao,
      cor: produto.cor,
      tamanho: produto.tamanho,
      valorvalorCusto: produto.valorCusto,
      valorVenda: produto.valorVenda,
      codigoUnico: produto.codigoUnico,
      categoria: produto.categoria,
      fornecedor: produto.fornecedor
    }
  }

  static toDomain(produto: rawProduto): Produto {

    return new Produto({
      descricao: produto.descricao,
      cor: produto.cor,
      tamanho: produto.tamanho,
      valorCusto: produto.valorCusto,
      valorVenda: produto.valorVenda,
      codigoUnico: produto.categoriaId,
      categoria: produto.categoriaId,
      fornecedor: produto.fornecedorId
    }, produto.id)
  }
}