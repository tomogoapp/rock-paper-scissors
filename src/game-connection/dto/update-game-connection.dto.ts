import { PartialType } from '@nestjs/mapped-types';
import { CreateGameConnectionDto } from './create-game-connection.dto';

export class UpdateGameConnectionDto extends PartialType(CreateGameConnectionDto) {
  id: number;
}
