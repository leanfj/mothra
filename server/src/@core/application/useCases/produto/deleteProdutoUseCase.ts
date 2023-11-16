import ProdutoRepository from '../../../domain/repository/produtoRepository'

interface DeleteProdutoUseCaseRequest {
  id: string
}

type DeleteProdutoUseCaseResponse = void

export default class DeleteProdutoUseCase {
  constructor(private produtoRepository: ProdutoRepository) {}

  async execute(request: DeleteProdutoUseCaseRequest): Promise<DeleteProdutoUseCaseResponse> {
    const {id} = request
    await this.produtoRepository.delete(id)
  }
}
