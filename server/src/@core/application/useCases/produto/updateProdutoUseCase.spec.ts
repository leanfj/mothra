import { ServicoInputDTO } from '../../../domain/dto/servico/servicoInputDTO'
import ServicoInMemoryRepository from '../../../infra/repository/servicoInMemoryRepository'
import UpdateServicoUseCase from './updateServicoUseCase'

describe('UpdateServicoUseCase', () => {
  it('should be update a serviço', async () => {
    const servicoRepository = new ServicoInMemoryRepository()
    const updateServicoUseCase = new UpdateServicoUseCase(servicoRepository)

    const servico: ServicoInputDTO = {
      nome: 'Serviço 1',
      descricao: 'Descrição do Serviço 1',
      valor: 100
    }
    const servicoCreated = await servicoRepository.create(servico)

    const servicoData = await servicoRepository.findById(servicoCreated.id)

    const newServicoData: ServicoInputDTO = {
      nome: 'Serviço 1',
      descricao: 'Descrição do Serviço 1',
      valor: 200
    }

    const servicoUpdated = await updateServicoUseCase.execute(
      servicoData.id,
      newServicoData
    )

    expect(newServicoData.valor).toBe(servicoUpdated.valor)
  })
})
