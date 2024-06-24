import { Injectable } from '@nestjs/common';
import { CreateGameConnectionDto } from './dto/create-game-connection.dto';
import { UpdateGameConnectionDto } from './dto/update-game-connection.dto';

@Injectable()
export class GameConnectionService {

  determineWinner(choice1: string, choice2:string): string {
    return 'ganador'
  }

  // create(createGameConnectionDto: CreateGameConnectionDto) {
  //   return 'This action adds a new gameConnection';
  // }

  // findAll() {
  //   return `This action returns all gameConnection`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} gameConnection`;
  // }

  // update(id: number, updateGameConnectionDto: UpdateGameConnectionDto) {
  //   return `This action updates a #${id} gameConnection`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} gameConnection`;
  // }
}
