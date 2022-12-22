export class ServicoError extends Error {
  constructor(readonly message: string) {
    super(message)
  }
}
