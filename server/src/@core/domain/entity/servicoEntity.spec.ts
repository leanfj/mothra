import { DescricaoServico } from '../valueObjects/descricaoServicoValueObjects'
import Servico from './servicoEntity'

describe('servicoEntity', () => {
  it('Deve criar uma serviço válido', () => {
    const servico = new Servico({
      nome: 'Serviço 1',
      descricao: new DescricaoServico('Descrição do serviço 1'),
      valor: 100
    })
    console.log('🚀 ~ file: servicoEntity.spec.ts:11 ~ it ~ servico', servico)

    expect(servico.nome).toBe('Serviço 1')
  })
})
