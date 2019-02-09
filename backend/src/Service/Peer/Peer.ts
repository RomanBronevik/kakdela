import Client from "../Client/Client";

export default class Peer {
    private readonly client: Client = null;
    private partner: Client = null;
    private room: string;

    /**
     * @param client - peer owner
     */
    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Return peer owner
     */
    public getClient(): Client {
        return this.client;
    }

    /**
     * Set peer partner
     * @param partner
     */
    public setPartner(partner: Client) {
        this.partner = partner;
    }

    /**
     * Returns peer identifier
     */
    public getPeerIdentifier(): any {
        return this.getClient().getSocketId();
    }

    /**
     * @param room
     */
    public joinRoom(room: string) {
        this.room = room;

        this.client
            .getSocket()
            .join(room);
    }

    public communicate() {
        this.client
            .getSocket()
            .on("requestMsg", (msg: any) => this.publish(msg));
    }

    /**
     * @param message
     */
    private publish(message: any) {
        if (!this.partner) {
            throw new Error("Have no peer partner to publish");
        }

        console.log("Publish message " + message);

        this.client
            .getSocket()
            .emit("responseMsg", {user: "Вы", message});

        this.partner
            .getSocket()
            .emit("responseMsg", {user: "Аноним", message});
    }
}
