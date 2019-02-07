import Client from "../Client/Client";

export default class Peer {
    private client: Client = null;
    private partner: Client = null;
    private identifier: number = null;

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
    public getPeerIdentifier(): number {
        return !this.identifier ? 0 : this.identifier;
    }

    /**
     * Broker message from client to its partner.
     * @param payload
     */
    public communicate(payload: string): void {

    }
}
