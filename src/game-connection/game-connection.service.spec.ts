import { Test, TestingModule } from '@nestjs/testing';
import { GameConnectionService } from './game-connection.service';

describe('GameConnectionService', () => {
  let service: GameConnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameConnectionService],
    }).compile();

    service = module.get<GameConnectionService>(GameConnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
