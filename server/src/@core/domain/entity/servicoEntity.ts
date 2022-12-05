import { randomUUID } from 'crypto'

export default class Servico {
  id: string
  nome: string
  descricao: string
  valor: number
  dataCadastro?: Date
  dataAtualizacao?: Date

  constructor(id: string, nome: string, descricao: string, valor: number) {
    this.id = id || randomUUID()
    this.nome = nome
    this.descricao = descricao
    this.valor = valor
  }
}
