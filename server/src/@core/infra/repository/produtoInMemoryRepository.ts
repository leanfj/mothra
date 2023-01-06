import Produto from '../../domain/entity/produtoEntity'
import ProdutoRepository from '../../domain/repository/produtoRepository'

export default class ProdutoInMemoryRepository implements ProdutoRepository {
  public produtos: Produto[] = []

  async findAll(): Promise<Produto[]> {
    return this.produtos
  }

  async findById(id: string): Promise<Produto> {
    const produto = this.produtos.find((produto) => produto.id === id)

    if (!produto) {
      throw new Error('Produto não encontrado')
    }

    return produto
  }

  async create(produto: Produto): Promise<void> {

    this.produtos.push(produto)

  }

  async update(id: string, produto: Produto): Promise<Produto> {
    const index = this.produtos.findIndex((produto) => produto.id === id)

    if (index === -1) {
      throw new Error('Produto não encontrado')
    }

    this.produtos[index] = produto

    return this.produtos[index]

  }

  async delete(id: string): Promise<void> {
    const index = this.produtos.findIndex((produto) => produto.id === id)

    if (index === -1) {
      throw new Error('Produto não encontrado')
    }

    this.produtos.splice(index, 1)
  }
}
