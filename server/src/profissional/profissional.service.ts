import { Injectable } from '@nestjs/common'
import { ProfissionalInputDTO } from '../@core/domain/dto/profissional/profissionalInputDTO'
import GetAllProfissionalUseCase from '../@core/application/useCases/profissional/getAllProfissionalUseCase'
import CreateProfissionalUseCase from '../@core/application/useCases/profissional/createProfissionalUseCase'
import GetProfissionalByIDUseCase from '../@core/application/useCases/profissional/getProfissionalByIdUseCase'
import UpdateProfissionalUseCase from '../@core/application/useCases/profissional/updateProfissionalUseCase'
import DeleteProfissionalUseCase from '../@core/application/useCases/profissional/deleteProfissionalUseCase'

@Injectable()
export class ProfissionalService {
  constructor(
    private createProfissionalUseCase: CreateProfissionalUseCase,
    private getProfissionalByIDUseCase: GetProfissionalByIDUseCase,
    private getAllProfissionalUseCase: GetAllProfissionalUseCase,
    private updateProfissionalUseCase: UpdateProfissionalUseCase,
    private deleteProfissionalUseCase: DeleteProfissionalUseCase
  ) {}
  create(createProfissionalDto: ProfissionalInputDTO) {
    return this.createProfissionalUseCase.execute(createProfissionalDto)
  }

  findAll() {
    return this.getAllProfissionalUseCase.execute()
  }

  findOne(id: string) {
    return this.getProfissionalByIDUseCase.execute(id)
  }

  update(id: string, updateProfissionalDto: ProfissionalInputDTO) {
    return this.updateProfissionalUseCase.execute(id, updateProfissionalDto)
  }

  remove(id: string) {
    return this.deleteProfissionalUseCase.execute(id)
  }
}
