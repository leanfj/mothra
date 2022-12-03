import { IsDate, IsEmail, IsNotEmpty, IsOptional } from 'class-validator'

export class ClienteInputDTO {
  @IsNotEmpty()
  id: number

  @IsNotEmpty()
  nome: string

  @IsEmail()
  email: string

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
