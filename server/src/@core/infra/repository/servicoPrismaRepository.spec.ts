import { PrismaClient } from '@prisma/client'
import { PrismaService } from '../../../prisma-service/prisma-service.service'
import { ServicoInputDTO } from '../../domain/dto/servico/servicoInputDTO'
import ServicoPrismaRepository from './servicoPrismaRepository'

describe('ServicoPrismaRepository', () => {
  let prisma: PrismaClient
  let prismaService: PrismaService
  let servicoPrismaRepository: ServicoPrismaRepository
  const servico: ServicoInputDTO = {
    nome: 'Serviço Teste',
    descricao: 'Descrição do serviço',
    valor: 100
  }

  beforeAll(async () => {
    prisma = new PrismaClient()
    prismaService = new PrismaService()
    servicoPrismaRepository = new ServicoPrismaRepository(prismaService)
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
    const servicoData = await servicoPrismaRepository.findAll()
    console.log("🚀 ~ file: servicoPrismaRepository.spec.ts:33 ~ it ~ servicoData", servicoData)

  })
})
