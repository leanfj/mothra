import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ClientesModule } from './clientes/clientes.module'
import { ProfissionalModule } from './profissional/profissional.module'
import { ServicoModule } from './servico/servico.module'

@Module({
  imports: [ClientesModule, ProfissionalModule, ServicoModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
