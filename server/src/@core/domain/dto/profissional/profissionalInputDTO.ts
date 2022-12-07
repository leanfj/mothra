import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator'

export class ProfissionalInputDTO {
  @IsOptional()
  id?: string

  @IsNotEmpty()
  nome: string

  @IsEmail()
  email: string

  @IsNotEmpty()
  genero: string

  @IsNotEmpty()
  telefone: string

  @IsNotEmpty()
  endereco: string

  @IsNotEmpty()
  cidade: string

  @IsNotEmpty()
  estado: string

  @IsOptional()
  servicos?: string[]
}
