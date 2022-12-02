import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ClienteInputDTO } from '../@core/domain/dto/clienteInputDTO';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() createClienteDto: ClienteInputDTO) {
    return this.clientesService.create(createClienteDto);
  }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.clientesService.findOne(+id);
    
    if(!data) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Not Found',
      }, HttpStatus.NOT_FOUND);
    }

    return data;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: ClienteInputDTO) {
    return this.clientesService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientesService.remove(+id);
  }
}
