import { randomUUID } from 'crypto'

export default class Profissional {
  id: string
  nome: string
  email: string
  genero: string
  telefone: string
  endereco: string
  cidade: string
  estado: string
  servicos?: any[]
  dataCadastro?: Date
  dataAtualizacao?: Date

  constructor(
    id: string,
    nome: string,
    email: string,
    genero: string,
    telefone: string,
    endereco: string,
    cidade: string,
    estado: string,
    servicos?: any[]
  ) {
    this.id = id || randomUUID()
    this.nome = nome
    this.email = email
    this.genero = genero
    this.telefone = telefone
    this.endereco = endereco
    this.cidade = cidade
    this.estado = estado
    this.servicos = servicos
  }
}
