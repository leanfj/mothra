import { ClienteInputDTO } from '../../../domain/dto/clienteInputDTO';
import ClienteInMemoryRepository from '../../../infra/repository/clienteInMemoryRepository';
import CreateClienteUseCase from './createClienteUseCase';

describe('UpdateClienteUseCase', () => {
  it('should be delete a Cliente',async () => {
    const clienteRepository = new ClienteInMemoryRepository();
    const createClienteUseCase = new CreateClienteUseCase(clienteRepository);
    
    const cliente: ClienteInputDTO = {
      id: 1,
      nome: 'Cliente 1',
      email: '',
      telefone: '999999999',
      endereco: 'Rua 1',
      cidade: 'Cidade 1',
      estado: 'Estado 1',
    };
    await createClienteUseCase.execute(cliente)

    const clienteData = await clienteRepository.findById(1)

    await clienteRepository.delete(clienteData.id)
    try {
      await clienteRepository.findById(1)
    } catch (error) {
      expect(error.message).toBe('Cliente not found');
    }

  });
});
