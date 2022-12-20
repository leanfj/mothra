import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus
} from '@nestjs/common'
import { ClienteInputDTO } from '../@core/domain/dto/cliente/clienteInputDTO'
import { ClientesService } from './clientes.service'

@Controller('cliente')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  async create(@Body() createClienteDto: ClienteInputDTO) {
    try {
      const clienteData = await this.clientesService.create(createClienteDto)
      return clienteData
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: error.message
          },
          HttpStatus.NOT_FOUND
        )
      }
    }
  }

  @Get()
  findAll() {
    return this.clientesService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const clienteData = await this.clientesService.findOne(id)
      return clienteData
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: error.message
          },
          HttpStatus.NOT_FOUND
        )
      }
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateClienteDto: any) {
    try {
      const clientData = await this.clientesService.update(id, updateClienteDto)
      return clientData
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: error.message
          },
          HttpStatus.NOT_FOUND
        )
      }
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.clientesService.remove(id)
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: error.message
          },
          HttpStatus.NOT_FOUND
        )
      }
    }
  }
}
