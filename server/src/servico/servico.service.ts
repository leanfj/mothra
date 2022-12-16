import { Injectable } from '@nestjs/common'
import CreateServicoUseCase, { CreateServicoUseCaseResponse } from '../@core/application/useCases/servico/createServicoUseCase'
import DeleteServicoUseCase from '../@core/application/useCases/servico/deleteServicoUseCase'
import GetAllServicoUseCase from '../@core/application/useCases/servico/getAllServicoUseCase'
import GetServicoByIDUseCase from '../@core/application/useCases/servico/getServicoByIdUseCase'
import UpdateServicoUseCase from '../@core/application/useCases/servico/updateServicoUseCase'
import { ServicoInputDTO } from '../@core/domain/dto/servico/servicoInputDTO'

@Injectable()
export class ServicoService {
  constructor(
    private createServicoUseCase: CreateServicoUseCase,
    private getServicoByIDUseCase: GetServicoByIDUseCase,
    private getAllServicoUseCase: GetAllServicoUseCase,
    private updateServicoUseCase: UpdateServicoUseCase,
    private deleteServicoUseCase: DeleteServicoUseCase
  ) {}
  create(createServicoDto: ServicoInputDTO): Promise<CreateServicoUseCaseResponse> {
    return this.createServicoUseCase.execute(createServicoDto)
  }

  findAll() {
    return this.getAllServicoUseCase.execute()
  }

  findOne(id: string) {
    return this.getServicoByIDUseCase.execute(id)
  }

  update(id: string, updateServicoDto: ServicoInputDTO) {
    return this.updateServicoUseCase.execute(id, updateServicoDto)
  }

  remove(id: string) {
    return this.deleteServicoUseCase.execute(id)
  }
}
