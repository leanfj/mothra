import { IsEmail } from 'class-validator';

export class ClienteInputDTO {
  id: number;
  nome: string;

  @IsEmail()
  email: string;
  
  telefone: string;
  endereco: string;
  cidade: string;
  estado: string;
  dataAtualizacao?: Date;
}
