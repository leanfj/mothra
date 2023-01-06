import ProdutoInMemoryRepository from '../../../infra/repository/produtoInMemoryRepository'
import CreateProdutoUseCase from './createProdutoUseCase'

describe('CreateProdutoUseCase', () => {
  it('deve criar um Produto', async () => {
    const produtoRepository = new ProdutoInMemoryRepository()
    const createProdutoUseCase = new CreateProdutoUseCase(produtoRepository)

    const { produto } = await createProdutoUseCase.execute({
      descricao: 'Descricão de Produto 1',
      cor: 'azul',
      tamanho: 'G',
      valorCusto: 100,
      valorVenda: 200,
      codigoUnico: 'bkn0001',
      categoria: '4c00d900-72c4-42f5-8883-d42014fa1d4f',
      fornecedor: '59f388de-1745-4ffa-b465-a9f2aa4f0a17',
    })

    
    expect(produto.descricao).toBe('Descricão de Produto 1')

  })
})
