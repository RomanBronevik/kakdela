import * as express from "express";
import * as bodyParser from "body-parser";
import Pool from "./Service/Pool/Pool";
import PoolManager from "./Service/Pool/PoolManager";

class App {
    public app: express.Application;
    private readonly poolManager: PoolManager;

    constructor() {
        this.app = express();
        this.config();
        this.poolManager = new PoolManager();
    }

    public getPoolManager() {
        return this.poolManager;
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

const application = new App();
const app = application.app;
const poolManager = application.getPoolManager();
poolManager.add("generic", new Pool("generic"));
poolManager.add("adult", new Pool("generic"));

export { app, poolManager };
