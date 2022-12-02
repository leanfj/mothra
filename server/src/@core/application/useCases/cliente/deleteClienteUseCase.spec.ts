import { ClienteInputDTO } from '../../../domain/dto/clienteInputDTO';
import ClienteInMemoryRepository from '../../../infra/repository/clienteInMemoryRepository';
import DeleteClienteUseCase from './deleteClienteUseCase';

describe('DeleteClienteUseCase', () => {
  it('should be delete a Cliente',async () => {
    const clienteRepository = new ClienteInMemoryRepository();
    const deleteClienteUseCase = new DeleteClienteUseCase(clienteRepository);
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

    await deleteClienteUseCase.execute(clienteData.id)
    
    try {
      await clienteRepository.findById(1)
    } catch (error) {
      expect(error.message).toBe('Cliente not found');
    }

  });
});
