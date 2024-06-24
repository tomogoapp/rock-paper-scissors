import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets'
import { GameConnectionService } from './game-connection.service'
import { Server, Socket } from 'socket.io'
import { CreateGameConnectionDto } from './dto/create-game-connection.dto'
import { UpdateGameConnectionDto } from './dto/update-game-connection.dto'
import { v4 as uuid } from 'uuid'

@WebSocketGateway({
  cors: true
})
export class GameConnectionGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  server: Server

  private clients: Map<string, Socket> = new Map()

  constructor(
    private readonly gameConnectionService: GameConnectionService
  ) {}

  handleConnection(client: any, ...args: any[]) {
    
    const userId = uuid()
    this.clients.set(userId,client)
    client.emit('connected', {userId})
    console.log(`Client connected ${userId}`)

  }

  handleDisconnect(client: Socket) {
      
    const userId = Array
      .from(this.clients.keys())
      .find(key => this.clients.get(key) === client)
    if(userId){
      this.clients.delete(userId)
      console.log(`Client disconnected: ${userId}`)
    }

  }

  @SubscribeMessage('play')
  handlePlay(
    client: Socket, payload: {
      userId: string,
      choice:string
    }
  ){
    console.log(`User ${payload.userId} played ${payload.choice}`)
  }

  // @SubscribeMessage('findAllGameConnection')
  // findAll() {
  //   return this.gameConnectionService.findAll()
  // }

  // @SubscribeMessage('findOneGameConnection')
  // findOne(@MessageBody() id: number) {
  //   return this.gameConnectionService.findOne(id)
  // }

  // @SubscribeMessage('updateGameConnection')
  // update(@MessageBody() updateGameConnectionDto: UpdateGameConnectionDto) {
  //   return this.gameConnectionService.update(updateGameConnectionDto.id, updateGameConnectionDto)
  // }

  // @SubscribeMessage('removeGameConnection')
  // remove(@MessageBody() id: number) {
  //   return this.gameConnectionService.remove(id)
  // }
}
