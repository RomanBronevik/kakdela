import Peer from "../Peer/Peer";

export default class Pool {
    /** List of clients in the pool */
    private peers: Map<number, Peer>;
    private readonly tag: string;

    constructor(tag: string) {
        this.peers = new Map<number, Peer>();
        this.tag = tag;
    }

    /**
     * Add peer to list of managed connection
     * @param peer
     */
    public register(peer: Peer) {
        console.log(`new user registered in ${this.tag} pool socket id ${peer.getPeerIdentifier()}`);
        this.peers.set(peer.getPeerIdentifier(), peer);
    }

    /**
     * Find chat partner for a peer. Check if there any of tracked clients peers
     * is idle. If there is no idle client peer just exit quietly. If there is
     * available partner assign him/her to our client.
     * @param peer
     */
    public findPartner(peer: Peer): Peer | null {
        for (const idlePeer of this.peers.values()) {
            if (peer.getClient().isSuitableForClient(idlePeer.getClient())
                && peer.getPeerIdentifier() !== idlePeer.getPeerIdentifier()
            ) {
                idlePeer.setPartner(peer.getClient());
                peer.setPartner(idlePeer.getClient());

                this.peers.delete(peer.getPeerIdentifier());
                this.peers.delete(idlePeer.getPeerIdentifier());

                return idlePeer;
            }
        }

        return null;
    }
}
