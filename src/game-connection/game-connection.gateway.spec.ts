import { Test, TestingModule } from '@nestjs/testing';
import { GameConnectionGateway } from './game-connection.gateway';
import { GameConnectionService } from './game-connection.service';

describe('GameConnectionGateway', () => {
  let gateway: GameConnectionGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameConnectionGateway, GameConnectionService],
    }).compile();

    gateway = module.get<GameConnectionGateway>(GameConnectionGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
