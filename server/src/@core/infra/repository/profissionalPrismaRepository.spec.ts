import { PrismaClient } from '@prisma/client'
import { ProfissionalInputDTO } from '../../../@core/domain/dto/profissional/profissionalInputDTO'
import ProfissionalPrismaRepository from './profissionalPrismaRepository'

describe('ProfissionalPrismaRepository', () => {
  let prisma: PrismaClient
  let profissionalPrismaRepository: ProfissionalPrismaRepository
  
  const profissional: ProfissionalInputDTO = {
    nome: 'Profissional Teste',
    email: '',
    genero: 'Masculino',
    telefone: '999999999',
    endereco: 'Rua 1',
    cidade: 'Cidade 1',
    estado: 'Estado 1'
  }

  beforeAll(async () => {
    prisma = new PrismaClient()
    profissionalPrismaRepository = new ProfissionalPrismaRepository(prisma)
  })

  afterAll(async () => {
    await prisma.profissional.deleteMany({
      where: {
        nome: profissional.nome
      }
    })
    await prisma.$disconnect()
  })

  it('should be able to reuturn all profissional', async () => {
    await profissionalPrismaRepository.create(profissional)
    const profissionalData = await profissionalPrismaRepository.findAll()
    console.log(
      '🚀 ~ file: profissionalPrismaRepository.spec.ts:36 ~ it ~ profissionalData',
      profissionalData
    )
  })

  it('should be able to reuturn a profissional servicos by id profissional', async () => {
    const profissionalData = await profissionalPrismaRepository.getServicosByProfissionalId(
      '082c76d0-5f85-42dc-a66f-4a0780490b7e'
    )
    profissionalData.servicos.forEach((servico) => {
      console.log(
        '🚀 ~ file: profissionalPrismaRepository.spec.ts:46 ~ it ~ servico',
        servico
      )
    })
  })
})
