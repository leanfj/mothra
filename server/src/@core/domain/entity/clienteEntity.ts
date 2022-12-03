export default class Cliente {
  id: number
  nome: string
  email: string
  telefone: string
  endereco: string
  cidade: string
  estado: string
  dataCadastro: Date
  dataAtualizacao?: Date

  constructor(
    id: number,
    nome: string,
    email: string,
    telefone: string,
    endereco: string,
    cidade: string,
    estado: string,
    dataAtualizacao?: Date
  ) {
    this.id = id
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
