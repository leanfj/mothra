import { IsEmail } from 'class-validator';

export class ClienteDTO {
  id: number;
  nome: string;

  @IsEmail()
  email: string;
  
  telefone: string;
  endereco: string;
  cidade: string;
  estado: string;
  dataCadastro: Date;
  dataAtualizacao: Date;
}
