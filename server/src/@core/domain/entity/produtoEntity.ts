import { randomUUID } from 'crypto'
import { Replace } from 'src/helpers/Replace'

export interface ProdutoProps {
  descricao: string
  cor: string
  tamanho: string
  valorCusto: number
  valorVenda: number
  codigoUnico: string
  categoria: string
  fornecedor: string
  dataCadastro: Date
  dataAtualizacao: Date
}
export default class Produto {
  private _id: string;
  private props: ProdutoProps

  constructor(props: Replace<ProdutoProps, {dataCadastro?: Date, dataAtualizacao?: Date}>,  id?: string ) {
    this._id = id ?? randomUUID()
    this.props = {
      ...props,
      dataCadastro: props.dataCadastro ?? new Date(),
      dataAtualizacao: props.dataAtualizacao ?? new Date(),
    }
  }

  public set cor(cor: string) {
    this.props.cor = cor
  }

  public set tamanho(tamanho: string) {
    this.props.tamanho = tamanho
  }
  
  public set descricao(descricao: string) {
    this.props.descricao = descricao
  }
  
  public set valorCusto(valorCusto: number) {
    this.props.valorCusto = valorCusto
  }

  public set valorVenda(valorVenda: number) {
    this.props.valorVenda = valorVenda
  }

  public set codigoUnico(codigoUnico: string) {
    this.props.codigoUnico = codigoUnico
  }

  public set categoria(categoria: string) {
    this.props.categoria = categoria
  }

  public set fornecedor(fornecedor: string) {
    this.props.fornecedor = fornecedor
  }
  
  public get id(): string {
    return this._id
  }

  public get cor(): string {
    return this.props.cor
  }

  public get tamanho(): string {
    return this.props.tamanho
  }
  
  public get descricao(): string {
    return this.props.descricao
  }
  
  public get valorCusto(): number {
    return this.props.valorCusto
  }

  public get valorVenda(): number {
    return this.props.valorVenda
  }

  public get codigoUnico(): string {
    return this.props.codigoUnico
  }

  public get categoria(): string {
    return this.props.categoria
  }

  public get fornecedor(): string {
    return this.props.fornecedor
  }

  public get dataAtualizacao(): Date {
    return this.props.dataAtualizacao
  }

  public get dataCadastro(): Date {
    return this.props.dataCadastro
  }
}
