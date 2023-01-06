import { ServicoInputDTO } from '../../../domain/dto/servico/servicoInputDTO'
import ServicoInMemoryRepository from '../../../infra/repository/servicoInMemoryRepository'
import DeleteServicoUseCase from './deleteServicoUseCase'

describe('DeleteClienteUseCase', () => {
  it('should be delete a Cliente', async () => {
    const servicoRepository = new ServicoInMemoryRepository()
    const deleteServicoUseCase = new DeleteServicoUseCase(servicoRepository)

    const servico: ServicoInputDTO = {
      nome: 'Servico 1',
      descricao: 'Descrição do Servico 1',
      valor: 100
    }

    const servicoCreated = await servicoRepository.create(servico)

    const servicoData = await servicoRepository.findById(servicoCreated.id)

    await deleteServicoUseCase.execute(servicoData.id)

    try {
      await servicoRepository.findById(servicoData.id)
    } catch (error) {
      expect(error.message).toBe('Serviço não encontrado')
    }
  })
})
