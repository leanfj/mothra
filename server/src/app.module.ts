import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ClientesModule } from './clientes/clientes.module'
import { ProfissionalModule } from './profissional/profissional.module';

@Module({
  imports: [ClientesModule, ProfissionalModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
