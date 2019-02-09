import {app, poolManager} from "../src/Application";
import { createServer, Server } from "http";
import ChatServer from "../src/ChatServer";

const server = createServer(app);
server.listen(3334,  () => {
    console.log("express server is listening on port 3334");
});


const chatServer = new ChatServer(
    server,
    poolManager.get("adult"),
    poolManager.get("generic"),
);
chatServer.run();
