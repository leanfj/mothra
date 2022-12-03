import { Injectable } from '@nestjs/common'
import { ClienteInputDTO } from '../@core/domain/dto/clienteInputDTO'
import GetAllClienteUseCase from '../@core/application/useCases/cliente/getAllClienteUseCase'
import CreateClienteUseCase from '../@core/application/useCases/cliente/createClienteUseCase'
import GetClienteByIDUseCase from '../@core/application/useCases/cliente/getClienteByIdUseCase'
import UpdateClienteUseCase from 'src/@core/application/useCases/cliente/updateClienteUseCase'
import DeleteClienteUseCase from 'src/@core/application/useCases/cliente/deleteClienteUseCase'

@Injectable()
export class ClientesService {
  constructor(
    private createClienteUseCase: CreateClienteUseCase,
    private getClienteByIDUseCase: GetClienteByIDUseCase,
    private getAllClienteUseCase: GetAllClienteUseCase,
    private updateClienteUseCase: UpdateClienteUseCase,
    private deleteClienteUseCase: DeleteClienteUseCase
  ) {}
  create(createClienteDto: ClienteInputDTO) {
    return this.createClienteUseCase.execute(createClienteDto)
  }

  findAll() {
    return this.getAllClienteUseCase.execute()
  }

  findOne(id: string) {
    return this.getClienteByIDUseCase.execute(id)
  }

  update(id: string, updateClienteDto: ClienteInputDTO) {
    return this.updateClienteUseCase.execute(id, updateClienteDto)
  }

  remove(id: string) {
    return this.deleteClienteUseCase.execute(id)
  }
}
