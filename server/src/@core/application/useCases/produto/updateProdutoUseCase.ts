import Produto from '../../../domain/entity/produtoEntity'
import ProdutoRepository from '../../../domain/repository/produtoRepository'

export interface UpdateProdutoUseCaseResponse {
  produto: Produto
}
export default class UpdateProdutoUseCase {
  constructor(private produtoRepository: ProdutoRepository) {}

  async execute(id: string, input: Produto): Promise<UpdateProdutoUseCaseResponse> {
    const produto = await this.produtoRepository.update(id, input)

    return { produto }
  }
}
