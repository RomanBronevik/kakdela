import * as io from "socket.io";
import { Server } from "http";
import Pool from "./Service/Pool/Pool";
import Peer from "./Service/Peer/Peer";
import Client from "./Service/Client/Client";

export default class ChatServer {
    private io: SocketIO.Server;
    private genericPool: Pool;
    private adultPool: Pool;

    /**
     * @param server
     * @param adultPool
     * @param genericPool
     */
    constructor(
        server: Server,
        adultPool: Pool,
        genericPool: Pool,
    ) {
        this.io = io.listen(server);
        this.genericPool = genericPool;
        this.adultPool = adultPool;
    }

    public run() {
        this.io.on("connection", (socket: any) => {
            console.log("Client connected, socket id: " + socket.id);
            const client = new Client(socket);
            const peer = new Peer(client);
            this.genericPool.register(peer);

            const partnerPeer = this.genericPool.findPartner(peer);

            if (null !== partnerPeer) {
                peer.communicate();
                partnerPeer.communicate();
            }
        });
    }
}
