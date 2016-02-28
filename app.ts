import * as express from 'express';

export class App {
    
    app: express.Express;
    
    constructor(){
        this.app = express();
        this.initializeExpress();
    }
    
    start() {

        this.app.listen(3000, function () {
            console.log('Example app listening on port 3000!');
        });
    }
    
    private initializeExpress(){
        this.app.get('/', function (req, res) {
            res.send('Hello World!');
        });
    }
}
