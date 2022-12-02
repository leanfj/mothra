import { ClienteInputDTO } from '../../../domain/dto/clienteInputDTO';
import ClienteInMemoryRepository from '../../../infra/repository/clienteInMemoryRepository';
import UpdateClienteUseCase from './updateClienteUseCase';

describe('UpdateClienteUseCase', () => {
  it('should be update a Cliente',async () => {
    const clienteRepository = new ClienteInMemoryRepository();
    const updateClienteUseCase = new UpdateClienteUseCase(clienteRepository);
    
    const cliente: ClienteInputDTO = {
      id: 1,
      nome: 'Cliente 1',
      email: '',
      telefone: '999999999',
      endereco: 'Rua 1',
      cidade: 'Cidade 1',
      estado: 'Estado 1',
    };
    await clienteRepository.create(cliente)

    const clienteData = await clienteRepository.findById(1)

    const newClienteData: ClienteInputDTO = {
      id: 1,
      nome: 'Cliente 1',
      email: 'email@email.com',
      telefone: '999999999',
      endereco: 'Rua 1',
      cidade: 'Cidade 1',
      estado: 'Estado 1',
      dataAtualizacao: new Date()
    };

    const clienteUpdated = await updateClienteUseCase.execute(clienteData.id, newClienteData)

    expect(newClienteData.email).toBe(clienteUpdated.email);
  });
});
