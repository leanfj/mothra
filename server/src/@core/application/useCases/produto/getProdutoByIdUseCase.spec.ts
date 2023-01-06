import { ServicoInputDTO } from '../../../domain/dto/servico/servicoInputDTO'
import ServicoInMemoryRepository from '../../../infra/repository/servicoInMemoryRepository'
import GetServicoByIDUseCase from './getServicoByIdUseCase'

describe('GetServicoByIdUseCase', () => {
  it('should by return serviço by id', async () => {
    const servicoRepository = new ServicoInMemoryRepository()
    const getServicoByIdUseCase = new GetServicoByIDUseCase(servicoRepository)

    const servico: ServicoInputDTO = {
      nome: 'Serviço 1',
      descricao: 'Descrição do Serviço 1',
      valor: 100
    }

    const servicoCreated = await servicoRepository.create(servico)

    const servicoData = await getServicoByIdUseCase.execute(servicoCreated.id)

    expect(servico.nome).toBe(servicoData.nome)
  })
})
