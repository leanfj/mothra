import { PrismaClient } from '@prisma/client'
import { ClienteInputDTO } from '../../domain/dto/cliente/clienteInputDTO'
import ClientePrismaRepository from './clientePrismaRepository'

describe('ClientePrismaRepository', () => {
  let prisma: PrismaClient
  let clientePrismaRepository: ClientePrismaRepository
  const cliente: ClienteInputDTO = {
    nome: 'Cliente Teste',
    email: '',
    genero: 'Masculino',
    telefone: '999999999',
    endereco: 'Rua 1',
    cidade: 'Cidade 1',
    estado: 'Estado 1'
  }

  beforeAll(async () => {
    prisma = new PrismaClient()
    clientePrismaRepository = new ClientePrismaRepository(prisma)
  })

  afterAll(async () => {
    await prisma.cliente.deleteMany({
      where: {
        nome: cliente.nome
      }
    })
    await prisma.$disconnect()
  })

  it('should be able to create a new cliente', async () => {
    const clienteData = await clientePrismaRepository.create(cliente)
    expect(clienteData.nome).toBe(cliente.nome)
  })
})
