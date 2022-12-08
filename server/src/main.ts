import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import { PrismaService } from './prisma-service/prisma-service.service'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  const dbService: PrismaService = app.get(PrismaService)

  app.enableCors()
  app.useGlobalPipes(new ValidationPipe())

  dbService.enableShutdownHooks(app)

  await app.listen(3000)
}
bootstrap()
