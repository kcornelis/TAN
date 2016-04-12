///<reference path="../typings/main.d.ts" />

import * as http from "http";
import * as express from 'express';
import * as path from 'path';
import * as consolidate from 'consolidate';
import { Settings } from './config';
import { TasksRoutes } from './api/public/config/task'

export class Express {
    
    app: express.Express;
    routes: any[] = [];
    server: http.Server;
    settings: Settings;
    
    constructor(settings: Settings){
        this.settings = settings;
        this.app = express();
        this.initializeExpress();
        this.registerRoutes();
    }
    
    start() : Promise<http.Server> {
        return new Promise<http.Server>((resolve, reject) => {
            this.server = this.app.listen(this.settings.port, () => {
                console.log('Example app listening on port ' + this.settings.port + '!');
                resolve(this.server);
            });
        });
    }
    
    stop() : Promise<any> {
        return new Promise<http.Server>((resolve, reject) => {
            this.server.close(() => {
                resolve(null);
            });
        });
    }
    
    private initializeExpress(){
        this.app.engine('.html', consolidate.swig);
        this.app.set('view engine', '.html');
        this.app.set('views', './app/web/views');
    
        this.app.get('/', function (req, res) { res.render('index'); });
        this.app.use(express.static(path.resolve('./public')));
    }
    
    private registerRoutes(){
        this.routes.push(new TasksRoutes(this.app));
    }
}
