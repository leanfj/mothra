import { Injectable } from '@nestjs/common';
import CreateClienteUseCase from '../@core/application/useCases/cliente/createClienteUseCase';
import GetClienteByIDUseCase from '../@core/application/useCases/cliente/getClienteByIDUseCase';
import { ClienteInputDTO } from '../@core/domain/dto/clienteInputDTO';

@Injectable()
export class ClientesService {
  constructor(
    private createClienteUseCase: CreateClienteUseCase,
    private getClienteByIDUseCase: GetClienteByIDUseCase,
  ) {}
  create(createClienteDto: ClienteInputDTO) {
    return this.createClienteUseCase.execute(createClienteDto);
  }

  findAll() {
    return `This action returns all clientes`;
  }

  findOne(id: number) {
      return this.getClienteByIDUseCase.execute(id);
  }

  update(id: number, updateClienteDto: ClienteInputDTO) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
