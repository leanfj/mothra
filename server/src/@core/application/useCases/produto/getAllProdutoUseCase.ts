import Produto from '../../../domain/entity/produtoEntity'
import ProdutoRepository from '../../../domain/repository/produtoRepository'

export interface GetAllProdutoUseCaseResponse {
  produtos: Produto[]
}

export default class GetAllProdutoUseCase {
  constructor(private produtoRepository: ProdutoRepository) {}

  async execute(): Promise<GetAllProdutoUseCaseResponse> {
    const produtos = await this.produtoRepository.findAll()

    return { produtos }
  }
}
