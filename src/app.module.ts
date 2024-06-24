import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GameConnectionModule } from './game-connection/game-connection.module'

@Module({
  imports: [GameConnectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
