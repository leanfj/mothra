import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { ProfissionalInputDTO } from '../@core/domain/dto/profissional/profissionalInputDTO'
import { ProfissionalService } from './profissional.service'

@Controller('profissional')
export class ProfissionalController {
  constructor(private readonly profissionalService: ProfissionalService) {}

  @Post()
  create(@Body() createProfissionalDto: ProfissionalInputDTO) {
    return this.profissionalService.create(createProfissionalDto)
  }

  @Get()
  findAll() {
    return this.profissionalService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profissionalService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfissionalDto: any) {
    console.log(
      '🚀 ~ file: profissional.controller.ts:34 ~ ProfissionalController ~ update ~ updateProfissionalDto',
      updateProfissionalDto
    )
    return this.profissionalService.update(id, updateProfissionalDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profissionalService.remove(id)
  }
}
