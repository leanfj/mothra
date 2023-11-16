import { GenericError } from "./genericError";

export default class ServicoError extends GenericError {
  constructor(readonly message: string) {
    super(message)
  }
}