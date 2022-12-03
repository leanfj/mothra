import { randomUUID } from 'crypto'

export default class Cliente {
  id: string
  nome: string
  email: string
  telefone: string
  endereco: string
  cidade: string
  estado: string
  dataCadastro: Date
  dataAtualizacao?: Date

  constructor(
    id: string,
    nome: string,
    email: string,
    telefone: string,
    endereco: string,
    cidade: string,
    estado: string,
    dataAtualizacao?: Date
  ) {
    this.id = id || randomUUID()
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.endereco = endereco
    this.cidade = cidade
    this.estado = estado
    this.dataCadastro = new Date()
    this.dataAtualizacao = dataAtualizacao || null
  }
}
