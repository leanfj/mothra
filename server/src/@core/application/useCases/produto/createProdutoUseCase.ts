import Produto from "../../../domain/entity/produtoEntity"
import ProdutoRepository from "../../../domain/repository/produtoRepository"

export interface CreateProdutoUseCaseRequest {
  descricao: string
  cor: string
  tamanho: string
  valorCusto: number
  valorVenda: number
  codigoUnico: string
  categoria: string
  fornecedor: string
}

export interface CreateProdutoUseCaseResponse {
  produto: Produto
}
export default class CreateProdutoUseCase {
  constructor(private produtoRepository: ProdutoRepository) {}

  async execute(
    input: CreateProdutoUseCaseRequest
  ): Promise<CreateProdutoUseCaseResponse> {
    const { 
      descricao,
      cor,
      tamanho,
      valorCusto,
      valorVenda,
      codigoUnico,
      categoria,
      fornecedor
     } = input

    const produto = new Produto({
      descricao,
      cor,
      tamanho,
      valorCusto,
      valorVenda,
      codigoUnico,
      categoria,
      fornecedor
    })

    await this.produtoRepository.create(produto)

    return {
      produto
    }
  }
}
