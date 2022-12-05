import { ServicoInputDTO } from '../../../domain/dto/servico/servicoInputDTO'
import ServicoInMemoryRepository from '../../../infra/repository/servicoInMemoryRepository'
import CreateServicoUseCase from './createServicoUseCase'

describe('CreateServicoUseCase', () => {
  it('should be create a Servico', async () => {
    const servicoRepository = new ServicoInMemoryRepository()
    const createServicoUseCase = new CreateServicoUseCase(servicoRepository)

    const servico: ServicoInputDTO = {
      nome: 'Serviço 1',
      descricao: 'Descrição do serviço 1',
      valor: 100
    }
    const servicoCreated = await createServicoUseCase.execute(servico)

    const servicoData = await servicoRepository.findById(servicoCreated.id)

    expect(servico.nome).toBe(servicoData.nome)
  })
})
