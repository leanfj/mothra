import { randomUUID } from 'crypto'
import { Replace } from 'src/helpers/Replace'
import { DescricaoServico } from '../valueObjects/descricaoServicoValueObjects'
export interface ServicoProps {
  nome: string
  descricao: DescricaoServico
  valor: number
  dataCadastro: Date
  dataAtualizacao: Date
}
export default class Servico {
  private _id: string;
  private props: ServicoProps

  constructor(props: Replace<ServicoProps, {dataCadastro?: Date, dataAtualizacao?: Date}>,  id?: string ) {
    this._id = id ?? randomUUID()
    this.props = {
      ...props,
      dataCadastro: props.dataCadastro ?? new Date(),
      dataAtualizacao: props.dataAtualizacao ?? new Date(),
      
    }
  }

  public set nome(nome: string) {
    this.props.nome = nome
  }

  public set descricao(descricao: DescricaoServico) {
    this.props.descricao = descricao
  }

  public set valor(valor: number) {
    this.props.valor = valor
  }

  public get id(): string {
    return this._id
  }

  public get nome(): string {
    return this.props.nome
  }

  public get descricao(): DescricaoServico {
    return this.props.descricao
  }

  public get valor(): number {
    return this.props.valor
  }

  public get dataAtualizacao(): Date {
    return this.props.dataAtualizacao
  }

  public get dataCadastro(): Date {
    return this.props.dataCadastro
  }
}
