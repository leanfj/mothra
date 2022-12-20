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
import { ServicoInputDTO } from '../@core/domain/dto/servico/servicoInputDTO'
import { ServicoService } from './servico.service'
import { ServicoViewModel } from './servicoViewModel'

@Controller('servicos')
export class ServicoController {
  constructor(private readonly servicoService: ServicoService) {}

  @Post()
  async create(@Body() body: ServicoInputDTO) {
    try {
      const { servico } = await this.servicoService.create(body)
      
      return ServicoViewModel.toView(servico)
    
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
    return this.servicoService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const servicoData = await this.servicoService.findOne(id)
      return servicoData
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
  async update(@Param('id') id: string, @Body() updateServicoDto: any) {
    try {
      const ServicoData = await this.servicoService.update(id, updateServicoDto)
      return ServicoData
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
      return await this.servicoService.remove(id)
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
