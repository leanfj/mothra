import { ServicoInputDTO } from '../../../domain/dto/servico/servicoInputDTO'
import ServicoInMemoryRepository from '../../../infra/repository/servicoInMemoryRepository'
import GetAllServicoUseCase from './getAllServicoUseCase'

describe('GetAllServicoUseCase', () => {
  it('should by return servico list', async () => {
    const servicoRepository = new ServicoInMemoryRepository()
    const getAllServicoUseCase = new GetAllServicoUseCase(servicoRepository)

    const servicoList: ServicoInputDTO[] = [
      {
        nome: 'Serviço 1',
        descricao: 'Descrição do Serviço 1',
        valor: 100
      },
      {
        nome: 'Serviço 2',
        descricao: 'Descrição do Serviço 2',
        valor: 100
      }
    ]

    servicoList.forEach(async (servico) => {
      await servicoRepository.create(servico)
    })

    const servicoData = await getAllServicoUseCase.execute()

    expect(servicoList[1].nome).toBe(servicoData[1].nome)
    expect(servicoList[0].descricao).toBe(servicoData[0].descricao)
  })
})
