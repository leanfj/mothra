import { Injectable } from '@nestjs/common'

@Injectable()
export class ProfissionalService {
  create(createProfissionalDto: CreateProfissionalDto) {
    return 'This action adds a new profissional'
  }

  findAll() {
    return `This action returns all profissional`
  }

  findOne(id: number) {
    return `This action returns a #${id} profissional`
  }

  update(id: number, updateProfissionalDto: UpdateProfissionalDto) {
    return `This action updates a #${id} profissional`
  }

  remove(id: number) {
    return `This action removes a #${id} profissional`
  }
}
