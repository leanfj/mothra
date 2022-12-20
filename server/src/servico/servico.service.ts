import { Injectable } from '@nestjs/common'
import Servico from '../@core/domain/entity/servicoEntity'
import { DescricaoServico } from '../@core/domain/valueObjects/descricaoServicoValueObjects'
import CreateServicoUseCase, {
  CreateServicoUseCaseResponse
} from '../@core/application/useCases/servico/createServicoUseCase'
import DeleteServicoUseCase from '../@core/application/useCases/servico/deleteServicoUseCase'
import GetAllServicoUseCase, {
  GetAllServicoUseCaseResponse
} from '../@core/application/useCases/servico/getAllServicoUseCase'
import GetServicoByIDUseCase from '../@core/application/useCases/servico/getServicoByIdUseCase'
import UpdateServicoUseCase, {
  UpdateServicoUseCaseResponse
} from '../@core/application/useCases/servico/updateServicoUseCase'
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
  create(
    createServicoDto: ServicoInputDTO
  ): Promise<CreateServicoUseCaseResponse> {
    return this.createServicoUseCase.execute(createServicoDto)
  }

  findAll(): Promise<GetAllServicoUseCaseResponse> {
    return this.getAllServicoUseCase.execute()
  }

  findOne(id: string) {
    return this.getServicoByIDUseCase.execute(id)
  }

  update(
    id: string,
    data: any
  ): Promise<UpdateServicoUseCaseResponse> {
    return this.updateServicoUseCase.execute(id, data)
  }

  remove(id: string) {
    return this.deleteServicoUseCase.execute({ id })
  }
}
