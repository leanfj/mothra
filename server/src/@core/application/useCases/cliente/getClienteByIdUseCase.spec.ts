import { ClienteInputDTO } from '../../../domain/dto/clienteInputDTO';
import ClienteInMemoryRepository from '../../../infra/repository/clienteInMemoryRepository';
import GetClienteByIDUseCase from './getClienteByIdUseCase';

describe('GetClienteByIdUseCase', () => {
  it('should by return cliente by id', async () => {
    const clienteRepository = new ClienteInMemoryRepository();
    const getClienteByIdUseCase = new GetClienteByIDUseCase(clienteRepository);

    const cliente: ClienteInputDTO = {
      id: 1,
      nome: 'Cliente 1',
      email: '',
      telefone: '999999999',
      endereco: 'Rua 1',
      cidade: 'Cidade 1',
      estado: 'Estado 1',
    };

    await clienteRepository.create(cliente);

    const clienteData = await getClienteByIdUseCase.execute(cliente.id)
    
    expect(cliente.nome).toBe(clienteData.nome);
  });
})