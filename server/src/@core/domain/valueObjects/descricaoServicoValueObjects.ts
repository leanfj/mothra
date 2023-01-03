export class DescricaoServico {
  private readonly descricao: string

  constructor(descricao: string) {
    if (!this.validarTamanhoDescricao(descricao)) {
      throw Error('A descrição deve ter entre 10 e 100 caracteres')
    }

    this.descricao = descricao
  }

  private validarTamanhoDescricao(descricao: string): boolean {
    return descricao.length >= 10 && descricao.length <= 100
  }

  get value(): string {
    return this.descricao
  }
}
