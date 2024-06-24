// game-connection.controller.ts
import { Controller, Get } from '@nestjs/common';
import { GameConnectionService } from './game-connection.service';

@Controller('game-connection')
export class GameConnectionController {
  constructor(private readonly gameConnectionService: GameConnectionService) {}

  @Get('status')
  getStatus() {
    return { status: 'Game server is running' };
  }
}