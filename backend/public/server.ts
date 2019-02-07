import app from "../src/Application";
import ChatServer from "../src/ChatServer";

app.listen(3000,  () => {
    console.log("express server is listening on port 3000");
});

const chatServer = new ChatServer(app);
chatServer.run();
