///<reference path="../typings/main.d.ts" />

import * as express from 'express';
import * as path from 'path';
import * as consolidate from 'consolidate';
import { TasksRoutes } from './api/public/config/task'

export class Express {
    
    app: express.Express;
    routes: any[] = [];
    
    constructor(){
        this.app = express();
        this.initializeExpress();
        this.registerRoutes();
    }
    
    start() {
        this.app.listen(3000, function () {
            console.log('Example app listening on port 3000!');
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
