import { Injectable } from '@nestjs/common'
import { ClienteInputDTO } from '../@core/domain/dto/clienteInputDTO'
import GetAllClienteUseCase from '../@core/application/useCases/cliente/getAllClienteUseCase'
import CreateClienteUseCase from '../@core/application/useCases/cliente/createClienteUseCase'
import GetClienteByIDUseCase from '../@core/application/useCases/cliente/getClienteByIdUseCase'

@Injectable()
export class ClientesService {
  constructor(
    private createClienteUseCase: CreateClienteUseCase,
    private getClienteByIDUseCase: GetClienteByIDUseCase,
    private getAllClienteUseCase: GetAllClienteUseCase,
  ) {}
  create(createClienteDto: ClienteInputDTO) {
    return this.createClienteUseCase.execute(createClienteDto)
  }

  findAll() {
    return this.getAllClienteUseCase.execute()
  }

  findOne(id: number) {
      return this.getClienteByIDUseCase.execute(id)
  }

  update(id: number, updateClienteDto: ClienteInputDTO) {
    return `This action updates a #${id} cliente`
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`
  }
}
