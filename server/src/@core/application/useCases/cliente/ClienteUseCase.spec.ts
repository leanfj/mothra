import { ClienteDTO } from '../../../domain/dto/clienteDTO';
import ClienteInMemoryRepository from '../../../infra/repository/clienteInMemoryRepository';
import CreateClienteUseCase from './createClienteUseCase';

describe('CreateClienteUseCase', () => {
  it('should be create a Cliente', () => {
    const clienteRepository = new ClienteInMemoryRepository();
    const createClienteUseCase = new CreateClienteUseCase(clienteRepository);

    const cliente: ClienteDTO = {
      id: 1,
      nome: 'Cliente 1',
      email: '',
      telefone: '999999999',
      endereco: 'Rua 1',
      cidade: 'Cidade 1',
      estado: 'Estado 1',
      dataCadastro: new Date(),
      dataAtualizacao: new Date(),
    };

    expect(createClienteUseCase.execute(cliente)).resolves.not.toThrow();
  });

  it('should by return cliente by id', async () => {
    const clienteRepository = new ClienteInMemoryRepository();
    const createClienteUseCase = new CreateClienteUseCase(clienteRepository);

    const cliente: ClienteDTO = {
      id: 1,
      nome: 'Cliente 1',
      email: '',
      telefone: '999999999',
      endereco: 'Rua 1',
      cidade: 'Cidade 1',
      estado: 'Estado 1',
      dataCadastro: new Date(),
      dataAtualizacao: new Date(),
    };

    await createClienteUseCase.execute(cliente);
    const clienteData = await clienteRepository.findById(1)
    
    expect(clienteData).toEqual(cliente);
  });
});
