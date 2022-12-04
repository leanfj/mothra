import { IsDate, IsEmail, IsNotEmpty, IsOptional } from 'class-validator'

export class ClienteInputDTO {
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
  @IsDate()
  dataAtualizacao?: Date
}
