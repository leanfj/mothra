import { PrismaClient } from '@prisma/client'
import { ServicoInputDTO } from '../../domain/dto/servico/servicoInputDTO'
import ServicoPrismaRepository from './servicoPrismaRepository'

describe('ServicoPrismaRepository', () => {
  let prisma: PrismaClient
  let servicoPrismaRepository: ServicoPrismaRepository
  const servico: ServicoInputDTO = {
    nome: 'Serviço Teste',
    descricao: 'Descrição do serviço',
    valor: 100
  }

  beforeAll(async () => {
    prisma = new PrismaClient()
    servicoPrismaRepository = new ServicoPrismaRepository(prisma)
  })

  afterAll(async () => {
    await prisma.servico.deleteMany({
      where: {
        nome: servico.nome
      }
    })
    await prisma.$disconnect()
  })

  it('should be able to create a new Serviço', async () => {
    const servicoData = await servicoPrismaRepository.create(servico)
    expect(servicoData.nome).toBe(servico.nome)
  })
})
