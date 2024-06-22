import { OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets"
import { Server,Socket } from "socket.io"
import {v4 as uuid} from 'uuid'

@WebSocketGateway({
    cors:true
})
export class GameGateWay implements OnGatewayDisconnect, OnGatewayDisconnect{

    @WebSocketServer()
    server: Server

    private clients: Map<string,Socket> = new Map()

    handleConection(client:Socket, ...arg:any[]){
        const userId = uuid()
        this.clients.set(userId, client)
        client.emit('connected',{userId})
        console.log(`Connect ${userId}`)
    }

    handleDisconnect(client: Socket) {
        const userId = Array.from(this.clients.keys()).find(key => this.clients.get(key) === client )
        this.clients.delete(userId)
        console.log(`Disconnect ${userId}`)
    }

    @SubscribeMessage('play')
    handlePlay(client: Socket, payload:{userId:string,choice:string}){
        console.log(`User ${payload.userId} played ${payload.choice}`)
    }

}
