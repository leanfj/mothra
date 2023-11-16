import { ProdutoError } from '../../application/errors/produtoError'
import { PrismaService } from '../../../prisma-service/prisma-service.service'
import Produto from '../../domain/entity/produtoEntity'
import ProdutoRepository from '../../domain/repository/produtoRepository'
import { ProdutoPrismaMapper } from '../database/prisma/mappers/produtoPrismaMapper'

export default class ProdutoPrismaRepository implements ProdutoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Produto[]> {
    const produtos = await this.prisma.produto.findMany() 
    return produtos.map(ProdutoPrismaMapper.toDomain)
  }

  async findById(produtoId: string): Promise<Produto> {
    const produto = await this.prisma.produto.findUnique({
      where: {
        id: produtoId
      }
    })

    if (!produto) {
      throw Error('Produto não encontrado')
    }

    return ProdutoPrismaMapper.toDomain(produto)
  }

  async create(produto: Produto): Promise<void> {
    const produtoDados = await this.prisma.produto.findMany({
      where: {
        descricao: produto.descricao
      }
    })

    if (produtoDados.length > 0) {
      throw new ServicoError('Serviço já cadastrado')
    }

    const servicoNovo = ProdutoPrismaMapper.toPersistence(produto)

    await this.prisma.produto.create({
      data: servicoNovo
    })
  }

  async update(id: string, data: any): Promise<Produto> {
    const servicoDados = await this.prisma.produto.findUnique({
      where: {
        id: id
      }
    })

    if (!servicoDados) {
      throw new Error('Serviço não encontrado')
    }

    await this.prisma.produto.update({
      where: { id },
      data: { ...servicoDados, ...data}
    })

    const servicoAtualizado = await this.prisma.produto.findUnique({
      where: {
        id: id
      }
    })

    return ProdutoPrismaMapper.toDomain(servicoAtualizado)

  }

  async delete(id: string): Promise<void> {
    const servico = await this.prisma.produto.findUnique({
      where: {
        id
      }
    })

    if (!servico) {
      throw new Error('Serviço não encontrado')
    }

    await this.prisma.produto.delete({
      where: {
        id: servico.id
      }
    })
  }
}
