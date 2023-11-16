import Produto from '../../../domain/entity/produtoEntity'
import ProdutoRepository from '../../../domain/repository/produtoRepository'
export interface GetProdutoUseCaseResponse {
  produto: Produto
}
export default class GetProdutoByIDUseCase {
  constructor(private produtoRepository: ProdutoRepository) {}

  async execute(id: string): Promise<GetProdutoUseCaseResponse> {
    const produto = await this.produtoRepository.findById(id)

    return { produto }
  }
}
