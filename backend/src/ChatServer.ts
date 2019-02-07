import * as io from "socket.io";
import * as express from "express";
import Pool from "./Service/Pool/Pool";
import Peer from "./Service/Peer/Peer";
import Client from "./Service/Client/Client";

export default class ChatServer {
    private io: SocketIO.Server;

    /**
     * @param app
     */
    constructor(app: express.Application) {
        this.io = io.listen(app);
    }

    public run() {
        const pool = new Pool();

        this.io.on("connect", (socket: any) => {
            console.log("Client connected, socket id: " + socket.id);
            const client = new Client(socket.id);
            const peer = new Peer(client);
            pool.register(peer);
            pool.findPartner(peer);
        });
    }
}
