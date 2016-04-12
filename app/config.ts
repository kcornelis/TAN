export * from './express'

export class Settings {
    port: number = 3000;
    
    constructor(env: string){
        var transform = this[env];
        if(transform != null) transform();
    }
    
    test = () => {
        this.port = 3010;
    }
}