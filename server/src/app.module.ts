import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ClientesModule } from './clientes/clientes.module'
import { ProfissionalModule } from './profissional/profissional.module'
import { ServicoModule } from './servico/servico.module'
import { PrismaService } from './prisma-service/prisma-service.service'

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientesModule,
    ProfissionalModule,
    ServicoModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService]
})
export class AppModule {}
