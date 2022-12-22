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
import { ServicoViewModel } from '../@core/infra/http/viewModels/servicoViewModel'

@Controller('servicos')
export class ServicoController {
  constructor(private readonly servicoService: ServicoService) {}

  @Post()
  async create(@Body() body: ServicoInputDTO) {
    try {
      const { servico } = await this.servicoService.create(body)

      return ServicoViewModel.toView(servico)
    } catch (error) {
      console.log("🚀 ~ file: servico.controller.ts:27 ~ ServicoController ~ create ~ error", error)
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          message: [error.message] // Exibição no frontend exige array
        },
        HttpStatus.NOT_FOUND
      )
    }
  }

  @Get()
  async findAll() {
    const { servicos } = await this.servicoService.findAll()

    return servicos.map(ServicoViewModel.toView)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const servicoData = await this.servicoService.findOne(id)
      return servicoData
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: error.message
        },
        HttpStatus.NOT_FOUND
      )
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: any) {
    console.log(
      '🚀 ~ file: servico.controller.ts:67 ~ ServicoController ~ update ~ id',
      id
    )
    console.log(
      '🚀 ~ file: servico.controller.ts:67 ~ ServicoController ~ update ~ updateServicoDto',
      data
    )
    try {
      const ServicoData = await this.servicoService.update(id, data)
      return ServicoData
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: error.message
        },
        HttpStatus.NOT_FOUND
      )
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.servicoService.remove(id)
    } catch (error) {
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
