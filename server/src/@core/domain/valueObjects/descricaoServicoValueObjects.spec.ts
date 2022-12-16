import { DescricaoServico } from './descricaoServicoValueObjects'

describe('DescricaoServicoValueObject', () => {
  it('Deve criar uma descrição de serviço válida', () => {
    const descricaoServico = new DescricaoServico('Descrição de serviço válida')
    expect(descricaoServico.value).toBeTruthy()
  })

  it('Não deve criar uma descrição de serviço com menos de 10 caracteres', () => {
    expect(() => {
      new DescricaoServico('Descrição')
    }).toThrow()
  })

  it('Não deve criar uma descrição de serviço com mais de 100 caracteres', () => {
    expect(() => {
      new DescricaoServico(
        'Descrição de serviço com mais de 100 caracteresDescrição de serviço com mais de 100 caracteres mais 100 caracteres'
      )
    }).toThrow()
  })
})
