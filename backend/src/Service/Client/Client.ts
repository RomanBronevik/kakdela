import {Socket} from "socket.io";

export default class Client {
    private socket: Socket = null;

    /**
     * @param socket
     */
    constructor(socket: Socket) {
        this.socket = socket;
    }

    /**
     * @param client
     * @return boolean
     */
    public isSuitableForClient(client: Client): boolean {
        return true;
    }

    /**
     * @return string
     */
    public getSocketId(): any {
        return this.socket.id;
    }

    /**
     * @return Socket
     */
    public getSocket(): Socket {
        return this.socket;
    }
}
