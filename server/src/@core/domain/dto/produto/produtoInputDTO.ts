import { IsNotEmpty } from 'class-validator'

export class ProdutoInputDTO {
  
  @IsNotEmpty()
  descricao: string

  @IsNotEmpty()
  cor: string

  @IsNotEmpty()
  tamanho: string

  @IsNotEmpty()
  valorCusto: number

  @IsNotEmpty()
  valorVenda: number

  @IsNotEmpty()
  codigoUnico: string

}
