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
    estado: string
  ) {
    this.id = id || randomUUID()
    this.nome = nome
    this.email = email
    this.genero = genero
    this.telefone = telefone
    this.endereco = endereco
    this.cidade = cidade
    this.estado = estado
  }
}
