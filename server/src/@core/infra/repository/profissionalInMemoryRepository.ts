import ProfissionalRepository from '../../../@core/domain/repository/profissionalRepository'
import { ProfissionalInputDTO } from '../../domain/dto/profissional/profissionalInputDTO'
import Profissional from '../../domain/entity/profissionalEntity'

export default class ProfissionalInMemoryRepository
  implements ProfissionalRepository
{
  getServicosByProfissionalId(id: string): Promise<Profissional> {
    throw new Error('Method not implemented.')
  }
  private profissionais: Profissional[] = []

  async findAll(): Promise<Profissional[]> {
    return this.profissionais
  }

  async findById(id: string): Promise<Profissional> {
    const profissional = this.profissionais.find(
      (profissional) => profissional.id === id
    )

    if (!profissional) {
      throw new Error('Profissional não encontrado')
    }

    return profissional
  }

  async create(profissionalInput: ProfissionalInputDTO): Promise<Profissional> {
    const newProfissional = new Profissional(
      profissionalInput.id,
      profissionalInput.nome,
      profissionalInput.email,
      profissionalInput.genero,
      profissionalInput.telefone,
      profissionalInput.endereco,
      profissionalInput.cidade,
      profissionalInput.estado
    )

    const profissionalData = this.profissionais.find(
      (profissional) => profissional.id === newProfissional.id
    )

    if (profissionalData) {
      throw new Error('Cliente já existe')
    }

    this.profissionais.push(newProfissional)

    return newProfissional
  }

  async update(id: string, input: any): Promise<Profissional> {
    const index = this.profissionais.findIndex((c) => c.id === id)

    if (index === -1) {
      throw new Error('Profissional não encontrado')
    }

    const profissional = this.profissionais[index]

    this.profissionais[index] = { ...profissional, ...input }

    return this.profissionais[index]
  }

  async delete(id: string): Promise<void> {
    const index = this.profissionais.findIndex(
      (profissional) => profissional.id === id
    )

    if (index === -1) {
      throw new Error('Profissional não encontrado')
    }

    this.profissionais.splice(index, 1)
  }
}
