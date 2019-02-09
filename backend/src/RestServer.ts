import * as express from "express";
import { Container } from "inversify";
import Pool from "./Service/Pool/Pool";

class RestServer {
    private app: express.Application;

    constructor(app: express.Application) {
        this.app = app;
    }
}
