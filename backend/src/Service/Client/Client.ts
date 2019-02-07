import Peer from "../Peer/Peer";

export default class Client {
    private socket: any = null;

    /**
     * @param socket
     */
    constructor(socket: any) {
        this.socket = socket;
    }

    /**
     * @param client
     */
    public isSuitableForClient(client: Client): boolean {
        return true;
    }
}
