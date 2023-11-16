export class ProdutoError extends Error {
  constructor(readonly message: string) {
    super(message)
  }
}
