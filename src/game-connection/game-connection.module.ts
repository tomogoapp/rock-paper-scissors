import { Module } from '@nestjs/common';
import { GameConnectionService } from './game-connection.service';
import { GameConnectionGateway } from './game-connection.gateway';

@Module({
  providers: [GameConnectionGateway, GameConnectionService],
})
export class GameConnectionModule {}
