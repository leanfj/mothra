import { IsNotEmpty } from 'class-validator'

export class ServicoInputDTO {
  @IsNotEmpty()
  nome: string

  @IsNotEmpty()
  descricao: string

  @IsNotEmpty()
  valor: number
}
