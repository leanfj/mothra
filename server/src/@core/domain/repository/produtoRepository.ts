import Produto from "../entity/produtoEntity";

export default abstract class ProdutoRepository {
  abstract findAll(): Promise<Produto[]>
  abstract findById(id: string): Promise<Produto>
  abstract create(produto: Produto): Promise<void>
  abstract update(id: string, produto: Produto): Promise<Produto>
  abstract delete(id: string): Promise<void | null>
}
