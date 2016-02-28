import * as express from 'express';
import * as path from 'path';
import * as consolidate from 'consolidate';

export class Express {
    
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
	    this.app.engine('.html', consolidate.swig);
	    this.app.set('view engine', '.html');
	    this.app.set('views', './app/web/views');
    
        this.app.get('/', function (req, res) { res.render('index'); });
        this.app.use(express.static(path.resolve('./'))); // todo fix this!
    }
}
