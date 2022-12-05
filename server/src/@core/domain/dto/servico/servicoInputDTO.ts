import { IsDate, IsNotEmpty, IsOptional } from 'class-validator'

export class ServicoInputDTO {
  @IsOptional()
  id?: string

  @IsNotEmpty()
  nome: string

  @IsNotEmpty()
  descricao: string

  @IsNotEmpty()
  valor: number
}
